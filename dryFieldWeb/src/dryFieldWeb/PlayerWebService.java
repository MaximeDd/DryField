package dryFieldWeb;


import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import model.Player;


@Stateless
@Path("/player")
@Produces(MediaType.APPLICATION_JSON)
@Consumes({MediaType.APPLICATION_JSON})
public class PlayerWebService {

	@PersistenceContext
	EntityManager em;
	
	@GET()
	public Response get()
	{
		@SuppressWarnings("unchecked")
		List<Player> players = em.createNamedQuery(
				"Player.findAll").getResultList();
		Collections.sort(players, new Comparator<Player>(){
			@Override
			public int compare(Player p1, Player p2) {
				return -p1.getPlayerScore().compareTo(p2.getPlayerScore());
			}
		});
	    return Response.ok(players).build();
	}
	
	@GET()
	@Path("/{id}")
	public Response get(@PathParam("id") Integer id)
	{
		Player player =  em.find(Player.class, id);
		List<Player> response = new ArrayList<Player>();
		response.add(player);
	    return Response.ok(response).build();
	}
	
	
	@POST()
	public Response add(Player player) 
	{
		em.persist(player);
		List<Player> response = new ArrayList<Player>();
		response.add(player);
	    return Response.ok(response).build();
	}
	
	@PUT
	public Response update(Player player) 
	{
		em.merge(player);
		List<Player> response = new ArrayList<Player>();
		response.add(player);
		return Response.ok(response).build();
	}
	
	@DELETE
	public Response remove(Player player)
	{
		em.remove(player);
		return Response.ok().build();
	}	
	
}
