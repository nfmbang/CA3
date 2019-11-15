/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import io.swagger.v3.oas.annotations.media.Schema;
import javax.xml.bind.annotation.XmlElement;

/**
 *
 * @author Martin
 */
@Schema(name="Message", description="Message from server.")
public class msg {
    private String msg;

    public msg(String msg) {
        this.msg = msg;
    }

    
    
    @Schema(description = "Message from the server")
    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }
    
}
