/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import DTO.msg;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import errorhandling.ExceptionDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import javax.annotation.security.RolesAllowed;

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
    private static final String CX = "003739661964971794239:gvzfdunqtk6";

    //API Key
    private static final String KEY = "AIzaSyBXm8bLJjCtmNHDZ17xLMzd9rhkpjauPQk";

    private final String URL = "https://www.googleapis.com";
    private final String PATH = "customsearch/v1";
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
//        ReeQuest req = new ReeQuest("hvad fuck bruger du source til martin??", URL);
        String result;
        Map<String, String> params = new HashMap();

        params.put("cx", CX);
        params.put("key", KEY);
        params.put("q", query);

//        return req.getRequest(PATH, params);
        //return "its a sting: " + query;
        String inputLine;
        StringBuilder response = new StringBuilder();
        BufferedReader in;

        try {
            URL obj = new URL(URL + "/" + PATH + "?key=" + KEY + "&cx=" + CX + "&q=" + query);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
            con.setRequestMethod("GET");

            int responseCode = con.getResponseCode();

            if (responseCode == 200) {
                in = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));
            } else {
                in = new BufferedReader(new InputStreamReader(con.getErrorStream(), "UTF-8"));
            }

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            if (responseCode == 200) {
                result = response.toString();
                return GSON.toJson(result);
            } else {
                ExceptionDTO Err = new ExceptionDTO(responseCode, "fejl" + response.toString());
                return GSON.toJson(Err);
            }

        } catch (IOException me) {
            throw new Exception(me.getMessage());
        }
    }

}
