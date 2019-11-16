/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.net.MalformedURLException;
import java.util.HashMap;
import java.util.Map;

import utils.ReeQuest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import javax.ws.rs.core.MediaType;

/**
 *
 * @author Niels Bang
 */
@Path("poormansgoogle")
public class GoogleResource {

    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();

    //ID of the custom search engine to use
    private static final String cx = "003739661964971794239:gvzfdunqtk6";

    //API Key
    private static final String key = "AIzaSyBXm8bLJjCtmNHDZ17xLMzd9rhkpjauPQk";

    private final String URL = "https://www.googleapis.com/customsearch/v1";
    //    private final String USER_AGENT = "Mozilla/5.0";

    @GET
    @Produces({MediaType.APPLICATION_JSON})

    public String demo() {
        return "{\"msg\":\"Poormansgoogle API\"}";
    }

    @Path("/{query}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String search(@PathParam("query") String query) throws Exception {
        ReeQuest req = new ReeQuest("hvad fuck bruger du source til martin??", URL);
        Map<String, String> params = new HashMap();

        params.put("cx", cx);
        params.put("key", key);
        params.put("q", query);

        return req.getRequest("", params);
    }

}
