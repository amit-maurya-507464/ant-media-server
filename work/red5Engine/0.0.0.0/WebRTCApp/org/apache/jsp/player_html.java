/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.5.73
 * Generated at: 2022-04-19 08:40:15 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class player_html extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    final java.lang.String _jspx_method = request.getMethod();
    if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET, POST or HEAD. Jasper also permits OPTIONS");
      return;
    }

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!doctype html>\n");
      out.write("<html lang=\"en\">\n");
      out.write("<head>\n");
      out.write("<title>Ant Media Server WebRTC Player</title>\n");
      out.write("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n");
      out.write("<meta charset=\"UTF-8\">\n");
      out.write("<link rel=\"stylesheet\" href=\"css/external/bootstrap4/bootstrap.min.css\" />\n");
      out.write("<script src=\"js/external/adapter-latest.js\"></script>\n");
      out.write("<link rel=\"stylesheet\" href=\"css/common.css\" />\n");
      out.write("<style>\n");
      out.write("video {\n");
      out.write("	width: 100%;\n");
      out.write("	max-width: 640px;\n");
      out.write("}\n");
      out.write("\n");
      out.write("/* Everything but the jumbotron gets side spacing for mobile first views */\n");
      out.write(".header, .marketing, .footer {\n");
      out.write("	padding: 15px;\n");
      out.write("}\n");
      out.write("\n");
      out.write("/* Custom page header */\n");
      out.write(".header {\n");
      out.write("	padding-bottom: 20px;\n");
      out.write("}\n");
      out.write("\n");
      out.write("/* Customize container */\n");
      out.write("@media ( min-width : 768px) {\n");
      out.write("	.container {\n");
      out.write("		max-width: 730px;\n");
      out.write("	}\n");
      out.write("}\n");
      out.write("\n");
      out.write(".container-narrow>hr {\n");
      out.write("	margin: 30px 0;\n");
      out.write("}\n");
      out.write("\n");
      out.write("/* Main marketing message and sign up button */\n");
      out.write(".jumbotron {\n");
      out.write("	text-align: center;\n");
      out.write("}\n");
      out.write("\n");
      out.write("/* Responsive: Portrait tablets and up */\n");
      out.write("@media screen and (min-width: 768px) {\n");
      out.write("	/* Remove the padding we set earlier */\n");
      out.write("	.header, .marketing, .footer {\n");
      out.write("		padding-right: 0;\n");
      out.write("		padding-left: 0;\n");
      out.write("	}\n");
      out.write("}\n");
      out.write(".options {\n");
      out.write("		display:none;\n");
      out.write("	}\n");
      out.write("#video-overlay {\n");
      out.write("	position: absolute;\n");
      out.write("	left: 25%;\n");
      out.write("	right: 25%;\n");
      out.write("	top: 25%;\n");
      out.write("	display: none;\n");
      out.write("	z-index: 9999999;\n");
      out.write("}\n");
      out.write("#video-overlay img{\n");
      out.write("	width: 25%;\n");
      out.write("}\n");
      out.write("\n");
      out.write(".message_area {\n");
      out.write("	height: 300px;\n");
      out.write("	overflow-y: auto;\n");
      out.write("	border-style: groove;\n");
      out.write("	border-width: thin;\n");
      out.write("	background-color: white;\n");
      out.write("}\n");
      out.write("</style>\n");
      out.write("</head>\n");
      out.write("<body>\n");
      out.write("\n");
      out.write("	<div class=\"container\">\n");
      out.write("		<div class=\"header clearfix\">\n");
      out.write("			<div class=\"row\">\n");
      out.write("				<h3 class=\"col text-muted\">WebRTC Play</h3>\n");
      out.write("				<nav class=\"col align-self-center\">\n");
      out.write("					<ul class=\"nav float-right\">\n");
      out.write("						<li><a href=\"http://antmedia.io\">Contact</a></li>\n");
      out.write("					</ul>\n");
      out.write("				</nav>\n");
      out.write("			</div>\n");
      out.write("		</div>\n");
      out.write("\n");
      out.write("\n");
      out.write("		<div class=\"jumbotron\">\n");
      out.write("			<div class=\"alert alert-primary text-center enterprise-feature\" role=\"alert\" style=\"margin-top:-2em\">\n");
      out.write("				WebRTC Playback is an Enterprise Edition. <br/>\n");
      out.write("				<a href=\"https://antmedia.io\">Try Enterprise Edition for free at antmedia.io</a> <br/><br/>\n");
      out.write("				<a href=\"https://github.com/ant-media/Ant-Media-Server/wiki#community-edition--enterprise-edition\" style=\"font-size:12px\">Comparison between Community and Enterprise</a>		 \n");
      out.write("			</div>\n");
      out.write("			<div class=\"col-sm-12 form-group\">\n");
      out.write("				<div id='video-overlay'>\n");
      out.write("					<img src=\"images/loading.gif\" />\n");
      out.write("				</div>\n");
      out.write("				<video id=\"remoteVideo\" autoplay controls playsinline ></video>\n");
      out.write("			</div>\n");
      out.write("			<div class=\"form-group col-sm-12 text-left\">\n");
      out.write("				<input type=\"text\" class=\"form-control\"\n");
      out.write("					id=\"streamName\" placeholder=\"Type stream name\">\n");
      out.write("			</div>\n");
      out.write("			<div class=\"col-sm-12 text-right\">\n");
      out.write("				<button type=\"button\" id=\"options\" class=\"btn btn-outline-primary btn-sm\">Options</button>\n");
      out.write("			</div>\n");
      out.write("			<div class=\"form-group col-sm-12 text-left options\">\n");
      out.write("				<div class=\"dropdown\">\n");
      out.write("  					<button class=\"btn btn-outline-primary btn-sm dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n");
      out.write("    					Force Stream Resolution\n");
      out.write("  					</button>\n");
      out.write("  					<div id=\"dropdownMenu\" class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n");
      out.write("    					<a class=\"dropdown-item active\" href=\"#\" >Automatic</a>\n");
      out.write("  					</div>\n");
      out.write("				</div>\n");
      out.write("				<div class=\"dropdown-divider\"></div>\n");
      out.write("				<label>Data Channel Messages</label>\n");
      out.write("				<div id=\"all-messages\" class=\"message_area\"></div>\n");
      out.write("				<div class=\"form-row\">\n");
      out.write("					<div class=\"form-group col-sm-8\">\n");
      out.write("						<input type=\"text\" class=\"form-control\" id=\"dataTextbox\" placeholder=\"Write your message to send publisher/players\">\n");
      out.write("					</div>\n");
      out.write("					<div class=\"form-group col-sm-2\">\n");
      out.write("					<button type=\"button\" id=\"send\" class=\"btn btn-outline-primary btn-block\">Send</button>\n");
      out.write("					</div>\n");
      out.write("					<div class=\"form-group col-sm-2\">\n");
      out.write("						<button id=\"send-image-button\" type=\"button\" class=\"btn btn-outline-primary btn-block\">\n");
      out.write("							Image\n");
      out.write("						</button>\n");
      out.write("						<input id=\"file-input\" type=\"file\" name=\"name\" accept=\"image/x-png,image/gif,image/jpeg\" style=\"display: none\" />\n");
      out.write("					</div>\n");
      out.write("				</div>\n");
      out.write("				\n");
      out.write("			</div>\n");
      out.write("\n");
      out.write("			\n");
      out.write("				<div class=\"form-group\">\n");
      out.write("					<button class=\"btn btn-primary\"\n");
      out.write("						id=\"start_play_button\">Start Playing</button>\n");
      out.write("					<button class=\"btn btn-primary\"\n");
      out.write("						id=\"stop_play_button\">Stop Playing</button>\n");
      out.write("				</div>\n");
      out.write("				\n");
      out.write("				<div class=\"col-sm-10 offset-sm-1\" id=\"stats_panel\" style=\"display: none;\">\n");
      out.write("					<div class=\"row text-muted text-left\">\n");
      out.write("						<div class=\"col-sm-6\">\n");
      out.write("						<small>\n");
      out.write("							<div id=\"average_bit_rate_container\">Average Bitrate(Kbps): <span id=\"average_bit_rate\"></span></div>\n");
      out.write("							<div id=\"latest_bit_rate_container\">Latest Bitrate(Kbps): <span id=\"latest_bit_rate\"></span></div>\n");
      out.write("							<div id=\"packet_lost_container\">PacketsLost: <span id=\"packet_lost_text\"></span></div>\n");
      out.write("							<div id=\"jitter_container\">Jitter Average Delay(Secs): <span id=\"jitter_text\"></span></div>\n");
      out.write("							<div id=\"audio_level_container\">Audio Level: <span id=\"audio_level\"></span></div>\n");
      out.write("							\n");
      out.write("						</small>\n");
      out.write("						</div>\n");
      out.write("						<div class=\"col-sm-6\">\n");
      out.write("						<small>\n");
      out.write("						<div id=\"incoming_resolution_container\">Frame WidthxHeight: <span id=\"frame_width\"></span>x<span id=\"frame_height\"></span></div>\n");
      out.write("						<div id=\"frame_decoded_container\">Frames Decoded: <span id=\"frame_decoded\"></span></div>\n");
      out.write("						<div id=\"frame_dropped_container\">Frames Dropped: <span id=\"frame_dropped\"></span></div>\n");
      out.write("						<div id=\"frame_received_container\">Frames Received: <span id=\"frame_received\"></span></div>\n");
      out.write("						</small>\n");
      out.write("						</div>\n");
      out.write("					</div>\n");
      out.write("				</div>\n");
      out.write("				<span class=\"badge badge-warning\" id=\"bitrateInfo\" style=\"font-size:14px;display:none\"\n");
      out.write("							style=\"display: none\">Weak Network Connection</span>\n");
      out.write("\n");
      out.write("		</div>\n");
      out.write("		<footer class=\"footer text-center\">\n");
      out.write("			<p>\n");
      out.write("				<a href=\"http://antmedia.io\">Ant Media Server</a>\n");
      out.write("			</p>\n");
      out.write("		</footer>\n");
      out.write("	</div>\n");
      out.write("\n");
      out.write("	<script src=\"js/external/jquery-3.4.1.min.js\"  crossorigin=\"anonymous\"></script>\n");
      out.write("	<script src=\"js/external/popper.min.js\" crossorigin=\"anonymous\"></script>\n");
      out.write("	<script src=\"js/external/bootstrap.min.js\"  crossorigin=\"anonymous\"></script>\n");
      out.write("\n");
      out.write("</body>\n");
      out.write("<script type=\"module\">\n");
      out.write("	import {WebRTCAdaptor} from \"./js/webrtc_adaptor.js\"\n");
      out.write("	import {getUrlParameter} from \"./js/fetch.stream.js\"\n");
      out.write("\n");
      out.write("\n");
      out.write("	var token = getUrlParameter(\"token\");\n");
      out.write("    \n");
      out.write("\n");
      out.write("	$(function() {\n");
      out.write("	  var id = getUrlParameter(\"id\");\n");
      out.write("	  if(typeof id != \"undefined\") {\n");
      out.write("		$(\"#streamName\").val(id);\n");
      out.write("	  }\n");
      out.write("	  else {\n");
      out.write("		id = getUrlParameter(\"name\");\n");
      out.write("		if (typeof id != \"undefined\") {\n");
      out.write("			$(\"#streamName\").val(id);\n");
      out.write("		} \n");
      out.write("		else {\n");
      out.write("			$(\"#streamName\").val(\"stream1\");\n");
      out.write("		}\n");
      out.write("	  }\n");
      out.write("	});\n");
      out.write("\n");
      out.write("\n");
      out.write("	var subscriberId = getUrlParameter(\"subscriberId\");\n");
      out.write("	var subscriberCode = getUrlParameter(\"subscriberCode\");\n");
      out.write("		\n");
      out.write("	var start_play_button = document.getElementById(\"start_play_button\");\n");
      out.write("	start_play_button.addEventListener(\"click\", startPlaying, false)\n");
      out.write("	var stop_play_button = document.getElementById(\"stop_play_button\");\n");
      out.write("	stop_play_button.addEventListener(\"click\",stopPlaying,false);\n");
      out.write("	var options = document.getElementById(\"options\");\n");
      out.write("	options.addEventListener(\"click\", toggleOptions, false);\n");
      out.write("	var send = document.getElementById(\"send\");\n");
      out.write("	send.addEventListener(\"click\", sendData, false);\n");
      out.write("\n");
      out.write("	var streamNameBox = document.getElementById(\"streamName\")\n");
      out.write("	streamNameBox.defaultValue = \"stream1\";\n");
      out.write("\n");
      out.write("	var streamId;\n");
      out.write("	\n");
      out.write("	function toggleOptions() {\n");
      out.write("		$(\".options\").toggle();\n");
      out.write("	}\n");
      out.write("\n");
      out.write("	function sendData() {\n");
      out.write("		try {\n");
      out.write("			var iceState = webRTCAdaptor.iceConnectionState(streamId);\n");
      out.write("            if (iceState != null && iceState != \"failed\" && iceState != \"disconnected\") {\n");
      out.write("            \n");
      out.write("				webRTCAdaptor.sendData($(\"#streamName\").val(), $(\"#dataTextbox\").val());\n");
      out.write("				$(\"#all-messages\").append(\"Sent: \" + $(\"#dataTextbox\").val() + \"<br>\");\n");
      out.write("				$(\"#dataTextbox\").val(\"\");\n");
      out.write("			}\n");
      out.write("			else {\n");
      out.write("				alert(\"WebRTC playing is not active. Please click Start Playing first\")\n");
      out.write("			}\n");
      out.write("		}\n");
      out.write("		catch (exception) {\n");
      out.write("			console.error(exception);\n");
      out.write("			alert(\"Message cannot be sent. Make sure you've enabled data channel and choose the correct player distribution on server web panel\");\n");
      out.write("		}\n");
      out.write("	}\n");
      out.write("\n");
      out.write("	var file_input = document.getElementById(\"file-input\");\n");
      out.write("	file_input.addEventListener(\"change\", send_image);\n");
      out.write("\n");
      out.write("	var connect_channel_button = document.getElementById(\"send-image-button\");\n");
      out.write("    connect_channel_button.addEventListener(\"click\", ()=>file_input.click());\n");
      out.write("\n");
      out.write("	function send_image() {\n");
      out.write("      var imageURL = file_input.files[0];\n");
      out.write("\n");
      out.write("      var reader = new FileReader();\n");
      out.write("      reader.onload = function (e) {\n");
      out.write("        var arrayBuffer = this.result;\n");
      out.write("        var bytes = new Uint8Array(arrayBuffer);\n");
      out.write("        var blob = new Blob([bytes.buffer]);\n");
      out.write("        var urlCreator = window.URL || window.webkitURL;\n");
      out.write("        var imageBlobUrl = urlCreator.createObjectURL(blob);\n");
      out.write("\n");
      out.write("		$('<img src =' + imageBlobUrl +' style=\"width:100px;\"><br>').appendTo($(\"#all-messages\"));\n");
      out.write("        sendBinaryData(arrayBuffer);\n");
      out.write("\n");
      out.write("      };\n");
      out.write("\n");
      out.write("      reader.readAsArrayBuffer(imageURL);\n");
      out.write("    }\n");
      out.write("\n");
      out.write("	function sendBinaryData(data) {\n");
      out.write("      try {\n");
      out.write("        var iceState = webRTCAdaptor.iceConnectionState(streamNameBox.value);\n");
      out.write("        if (\n");
      out.write("          iceState != null &&\n");
      out.write("          iceState != \"failed\" &&\n");
      out.write("          iceState != \"disconnected\"\n");
      out.write("        ) {\n");
      out.write("          webRTCAdaptor.sendData(streamNameBox.value, data);\n");
      out.write("        } else {\n");
      out.write("          alert(\"WebRTC connection is not active. Please click start first\");\n");
      out.write("        }\n");
      out.write("      } catch (exception) {\n");
      out.write("        console.error(exception);\n");
      out.write("        alert(\n");
      out.write("          \"Message cannot be sent. Make sure you've enabled data channel on server web panel\"\n");
      out.write("        );\n");
      out.write("      }\n");
      out.write("    }\n");
      out.write("\n");
      out.write("	function handleImageData(data) {\n");
      out.write("        var bytes = new Uint8Array(data);\n");
      out.write("        var blob = new Blob([bytes.buffer]);\n");
      out.write("        var urlCreator = window.URL || window.webkitURL;\n");
      out.write("        var imageUrl = urlCreator.createObjectURL(blob);\n");
      out.write("\n");
      out.write("		$('<img src =' + imageUrl +' style=\"width:100px;\"><br>').appendTo($(\"#all-messages\"));\n");
      out.write("    }\n");
      out.write("	\n");
      out.write("	function startPlaying() {\n");
      out.write("		streamId = streamNameBox.value;\n");
      out.write("		webRTCAdaptor.play(streamNameBox.value, token, \"\", [], subscriberId, subscriberCode);\n");
      out.write("	}\n");
      out.write("\n");
      out.write("	function stopPlaying() {\n");
      out.write("		webRTCAdaptor.stop(streamId);\n");
      out.write("	}\n");
      out.write("\n");
      out.write("	var pc_config = {\n");
      out.write("			'iceServers' : [ {\n");
      out.write("				'urls' : 'stun:stun1.l.google.com:19302'\n");
      out.write("			} ]\n");
      out.write("		};\n");
      out.write("\n");
      out.write("	var sdpConstraints = {\n");
      out.write("		OfferToReceiveAudio : true,\n");
      out.write("		OfferToReceiveVideo : true\n");
      out.write("\n");
      out.write("	};\n");
      out.write("	var mediaConstraints = {\n");
      out.write("		video : false,\n");
      out.write("		audio : false\n");
      out.write("	};\n");
      out.write("	\n");
      out.write("	var appName = location.pathname.substring(0, location.pathname.lastIndexOf(\"/\")+1);\n");
      out.write("	var path =  location.hostname + \":\" + location.port + appName + \"websocket\";\n");
      out.write("	var websocketURL =  \"ws://\" + path;\n");
      out.write("	\n");
      out.write("	if (location.protocol.startsWith(\"https\")) {\n");
      out.write("		websocketURL = \"wss://\" + path;\n");
      out.write("	}\n");
      out.write("\n");
      out.write("\n");
      out.write("	function startAnimation() {\n");
      out.write("\n");
      out.write("        $(\"#bitrateInfo\").fadeIn(800, function () {\n");
      out.write("          $(\"#bitrateInfo\").fadeOut(800, function () {\n");
      out.write("        	$(\"#bitrateInfo\").html(\"Weak Network Connection\");\n");
      out.write("          });\n");
      out.write("        });\n");
      out.write("      }\n");
      out.write("\n");
      out.write("	var webRTCAdaptor = new WebRTCAdaptor({\n");
      out.write("		websocket_url : websocketURL,\n");
      out.write("		mediaConstraints : mediaConstraints,\n");
      out.write("		peerconnection_config : pc_config,\n");
      out.write("		sdp_constraints : sdpConstraints,\n");
      out.write("		remoteVideoId : \"remoteVideo\",\n");
      out.write("		isPlayMode : true,\n");
      out.write("		debug : true,\n");
      out.write("		candidateTypes: [\"tcp\", \"udp\"],\n");
      out.write("		callback : function(info, obj) {\n");
      out.write("			if (info == \"initialized\") {\n");
      out.write("				console.log(\"initialized\");\n");
      out.write("				start_play_button.disabled = false;\n");
      out.write("				stop_play_button.disabled = true;\n");
      out.write("			} else if (info == \"play_started\") {\n");
      out.write("				//joined the stream\n");
      out.write("				console.log(\"play started\");\n");
      out.write("				start_play_button.disabled = true;\n");
      out.write("				stop_play_button.disabled = false;\n");
      out.write("				webRTCAdaptor.getStreamInfo(streamId); \n");
      out.write("				webRTCAdaptor.enableStats(obj.streamId);\n");
      out.write("\n");
      out.write("			} else if (info == \"play_finished\") {\n");
      out.write("				//leaved the stream\n");
      out.write("				console.log(\"play finished\");\n");
      out.write("				start_play_button.disabled = false;\n");
      out.write("				stop_play_button.disabled = true;\n");
      out.write("				$(\"#stats_panel\").hide();\n");
      out.write("				// Reset stream resolutions in dropdown\n");
      out.write("				document.getElementById(\"dropdownMenu\").innerHTML = '<a class=\"dropdown-item active\" href=\"#\">Automatic</a>'; \n");
      out.write("			} else if (info == \"closed\") {\n");
      out.write("				//console.log(\"Connection closed\");\n");
      out.write("				if (typeof obj != \"undefined\") {\n");
      out.write("					console.log(\"Connecton closed: \"\n");
      out.write("							+ JSON.stringify(obj));\n");
      out.write("				}\n");
      out.write("			} else if (info == \"streamInformation\") {\n");
      out.write("\n");
      out.write("				var streamResolutions = new Array();\n");
      out.write("\n");
      out.write("				obj[\"streamInfo\"].forEach(function(entry) {\n");
      out.write("					//It's needs to both of VP8 and H264. So it can be dublicate\n");
      out.write("					if(!streamResolutions.includes(entry[\"streamHeight\"])){\n");
      out.write("						streamResolutions.push(entry[\"streamHeight\"]);	\n");
      out.write("					}	\n");
      out.write("				});\n");
      out.write("				// Sort stream resolutions for good UI :)\n");
      out.write("				streamResolutions = streamResolutions.sort(function(a, b){return a-b});\n");
      out.write("\n");
      out.write("				// Add stream resolutions in dropdown menu\n");
      out.write("				const dropdownMenu = document.querySelector('.dropdown-menu');\n");
      out.write("\n");
      out.write("				streamResolutions.forEach(streamResolution => {\n");
      out.write("    				dropdownMenu.innerHTML += '<a class=\"dropdown-item\" href=\"#\">'+streamResolution+'p</a>';\n");
      out.write("				});\n");
      out.write("\n");
      out.write("				$('.dropdown-menu a').click(function(){\n");
      out.write("					var dropdownSelectedItem = $(this).text();\n");
      out.write(" 					\n");
      out.write(" 					if(dropdownSelectedItem == \"Automatic\"){\n");
      out.write(" 						//It should 0p because of replacing \"p\" character in below\n");
      out.write(" 						dropdownSelectedItem = \"0p\";\n");
      out.write(" 					}\n");
      out.write("\n");
      out.write(" 					// Remove p character in stream resolution\n");
      out.write(" 					dropdownSelectedItem = dropdownSelectedItem.replace('p', '');\n");
      out.write("\n");
      out.write(" 					// Call set stream resolution\n");
      out.write("    				webRTCAdaptor.forceStreamQuality(streamId, Number(dropdownSelectedItem));\n");
      out.write("\n");
      out.write("					// Remove current active item\n");
      out.write("					$('a.dropdown-item.active').removeClass(\"active\"); \n");
      out.write("					// Add active in new item\n");
      out.write("					$(this).addClass(\"active\"); \n");
      out.write("				});\n");
      out.write("			}		\n");
      out.write("			else if (info == \"ice_connection_state_changed\") {\n");
      out.write("				console.log(\"iceConnectionState Changed: \",JSON.stringify(obj));\n");
      out.write("			}\n");
      out.write("			else if (info == \"updated_stats\") {\n");
      out.write("				//obj is the PeerStats which has fields\n");
      out.write("				 //averageIncomingBitrate - kbits/sec\n");
      out.write("				//currentIncomingBitrate - kbits/sec\n");
      out.write("				//packetsLost - total number of packet lost\n");
      out.write("				//fractionLost - fraction of packet lost\n");
      out.write("\n");
      out.write("				$(\"#average_bit_rate\").text(obj.averageIncomingBitrate);\n");
      out.write("				if (obj.averageIncomingBitrate > 0)  {\n");
      out.write("					$(\"#average_bit_rate_container\").show();\n");
      out.write("				}\n");
      out.write("				else {\n");
      out.write("					$(\"#average_bit_rate_container\").hide();\n");
      out.write("				}\n");
      out.write("				$(\"#latest_bit_rate\").text(obj.currentIncomingBitrate);	\n");
      out.write("				if (obj.currentIncomingBitrate > 0) {\n");
      out.write("					$(\"#latest_bit_rate_container\").show();\n");
      out.write("				}\n");
      out.write("				else {\n");
      out.write("					$(\"#latest_bit_rate_container\").hide();\n");
      out.write("				}\n");
      out.write("\n");
      out.write("				var packetLost = parseInt(obj.videoPacketsLost) + parseInt(obj.audioPacketsLost);	\n");
      out.write("				$(\"#packet_lost_text\").text(packetLost);\n");
      out.write("				if (packetLost > -1) {\n");
      out.write("					$(\"#packet_lost_container\").show();\n");
      out.write("				}\n");
      out.write("				else {\n");
      out.write("					$(\"#packet_lost_container\").hide();\n");
      out.write("				}\n");
      out.write("\n");
      out.write("				var jitterAverageDelay = ((parseFloat(obj.videoJitterAverageDelay) + parseFloat(obj.audioJitterAverageDelay)) / 2).toPrecision(3);\n");
      out.write("				$(\"#jitter_text\").text(jitterAverageDelay);\n");
      out.write("				if (jitterAverageDelay > 0) {\n");
      out.write("					$(\"#jitter_container\").show();\n");
      out.write("				}\n");
      out.write("				else {\n");
      out.write("					$(\"#jitter_container\").hide();\n");
      out.write("				}\n");
      out.write("\n");
      out.write("				$(\"#audio_level\").text(obj.audioLevel.toPrecision(3));\n");
      out.write("				if (obj.audioLevel > -1) {\n");
      out.write("					$(\"#audio_level_container\").show();\n");
      out.write("				}\n");
      out.write("				else {\n");
      out.write("					$(\"#audio_level_container\").hide();\n");
      out.write("				}\n");
      out.write("\n");
      out.write("				\n");
      out.write("				$(\"#frame_width\").text(obj.frameWidth);\n");
      out.write("				$(\"#frame_height\").text(obj.frameHeight);\n");
      out.write("				if (obj.frameWidth > 0 && obj.frameHeight > 0) {\n");
      out.write("					$(\"#incoming_resolution_container\").show();\n");
      out.write("				}\n");
      out.write("				else {\n");
      out.write("					$(\"#incoming_resolution_container\").hide();\n");
      out.write("				}\n");
      out.write("				$(\"#frame_received\").text(obj.framesReceived);	\n");
      out.write("				if (obj.framesReceived > -1) {\n");
      out.write("					$(\"#frame_received_container\").show();	\n");
      out.write("				}\n");
      out.write("				else {\n");
      out.write("					$(\"#frame_received_container\").hide();\n");
      out.write("				}\n");
      out.write("\n");
      out.write("				$(\"#frame_decoded\").text(obj.framesDecoded);\n");
      out.write("				if (obj.framesDecoded > -1) {\n");
      out.write("					$(\"#frame_decoded_container\").show();	\n");
      out.write("				}\n");
      out.write("				else {\n");
      out.write("					$(\"#frame_decoded_container\").hide();\n");
      out.write("				}\n");
      out.write("				$(\"#frame_dropped\").text(obj.framesDropped);\n");
      out.write("				if (obj.framesDropped > -1) {\n");
      out.write("					$(\"#frame_dropped_container\").show();	\n");
      out.write("				}\n");
      out.write("				else {\n");
      out.write("					$(\"#frame_dropped_container\").hide();\n");
      out.write("				}\n");
      out.write("\n");
      out.write("				$(\"#stats_panel\").show();\n");
      out.write("				\n");
      out.write("				\n");
      out.write("\n");
      out.write("				console.debug(\"Average incoming kbits/sec: \" + obj.averageIncomingBitrate \n");
      out.write("						+ \" Current incoming kbits/sec: \" + obj.currentIncomingBitrate\n");
      out.write("						+ \" video packetLost: \" + obj.videoPacketsLost \n");
      out.write("						+ \" audio packetLost: \" + obj.audioPacketsLost \n");
      out.write("						+ \" frame width: \" + obj.frameWidth\n");
      out.write("						+ \" frame height: \" + obj.frameHeight\n");
      out.write("						+ \" frame received: \" + obj.framesReceived\n");
      out.write("						+ \" frame decoded: \" + obj.framesDecoded\n");
      out.write("						+ \" frame dropped: \" + obj.framesDropped\n");
      out.write("						+ \" video jitter average delay: \" + obj.videoJitterAverageDelay\n");
      out.write("						+ \" audio jitter average delay: \" + obj.audioJitterAverageDelay\n");
      out.write("						+ \" audio level: \" + obj.audioLevel);\n");
      out.write("				 \n");
      out.write("			}\n");
      out.write("			else if (info == \"data_received\") {\n");
      out.write("				var data = obj.data;\n");
      out.write("				if (data instanceof ArrayBuffer) {\n");
      out.write("                	handleImageData(data);\n");
      out.write("              	}\n");
      out.write("			  	else {\n");
      out.write("					$(\"#all-messages\").append(\"Received: \" + data + \"<br>\");\n");
      out.write("			  	}\n");
      out.write("			}\n");
      out.write("			else if (info == \"bitrateMeasurement\") {\n");
      out.write("\n");
      out.write("				console.debug(obj);	\n");
      out.write("				if(obj.audioBitrate+obj.videoBitrate > obj.targetBitrate) {\n");
      out.write("					startAnimation();\n");
      out.write("				}\n");
      out.write("				$(\"#video_bit_rate\").text(parseInt(obj.audioBitrate) + parseInt(obj.videoBitrate));\n");
      out.write("			}\n");
      out.write("			else if(info == \"resolutionChangeInfo\"){\n");
      out.write("				console.log(\"Resolution is changed to \"+obj[\"streamHeight\"]);\n");
      out.write("				let getVideo = document.getElementById(\"remoteVideo\");\n");
      out.write("				let overlay = document.getElementById('video-overlay');\n");
      out.write("				getVideo.pause();\n");
      out.write("				overlay.style.display = \"block\";\n");
      out.write("				setTimeout(function(){ getVideo.play();overlay.style.display = \"none\";}, 2000);\n");
      out.write("			}\n");
      out.write("			else {\n");
      out.write("				console.log( info + \" notification received\");\n");
      out.write("			}\n");
      out.write("		},\n");
      out.write("		callbackError : function(error) {\n");
      out.write("			//some of the possible errors, NotFoundError, SecurityError,PermissionDeniedError\n");
      out.write("\n");
      out.write("			console.log(\"error callback: \" + JSON.stringify(error));\n");
      out.write("			alert(JSON.stringify(error));\n");
      out.write("		}\n");
      out.write("	});\n");
      out.write("\n");
      out.write("	window.webRTCAdaptor = webRTCAdaptor;\n");
      out.write("</script>\n");
      out.write("</html>\n");
      out.write("\n");
      out.write("\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
