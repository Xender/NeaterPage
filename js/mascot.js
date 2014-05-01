/*
 * mascot.js
 * 
 * Copyright 2014 pache <github.com/mukyu>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */
$(document).ready(function(){
	if(usemascots == true){
		$("#mascot").append("<img src='"+mascotimg+"' width='"+mascotwidth+"' height='"+mascotheight+"'>");	
		switch(mascotpos){
			case "right":
				$("#mascot").css("right", "0px");
				break;
			case "left":
				$("#mascot").css("left", "0px");
				break;
			default:
				$("#mascot").css("left", "0px");
				break;
		}
		$("#mascot").css("bottom", "0px");
		$("#mascot").css("opacity", mascotopacity);
		$("#mascot").css("width", mascotwidth);
		$("#mascot").css("height", mascotheight);
	}
	else{}
});