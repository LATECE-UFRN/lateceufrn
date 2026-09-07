// Garden Gnome Software - Skin
// Pano2VR 8.0.6/22615
// Filename: feather_orb.ggsk
// Generated 2026-09-06T01:52:08Z

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_menu_left', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_menu_right', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_hotspots', 2, true, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_url_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_languages', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_theme', 0, "#4FB5C2", { ignoreInState: 1  });
	player.addVariable('opt_proj_title', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_back', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_back_available', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info_available', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_desc_in_maps', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_auto_rot', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_menu_center', 2, false, { ignoreInState: 1  });
	player.addVariable('shift_left_slider', 1, 0, { ignoreInState: 0  });
	player.addVariable('width_share_container', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('node_cloner_hasUp', 2, true, { ignoreInState: 0  });
	player.addVariable('node_cloner_hasDown', 2, true, { ignoreInState: 0  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('kb_accessibility', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	player.addVariable('model_loading', 2, false, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	var pano=player;
	player.setApiVersion(7);
	this.rasterizeHTML = player.getRasterizeHTML();
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	me.fontsLoaded=0;
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i,hs,el,els,elo,ela,geometry,material;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	this._=function(text, params) {
		return player._(text, params);
	}
	
	player.setMargins({'left': {'value': 0, 'unit': 'px'}, 'top': {'value': 0, 'unit': 'px'}, 'right': {'value': 0, 'unit': 'px'}, 'bottom': {'value': 0, 'unit': 'px'}});
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		if (player.is3dModel()) {
			let hg = player.get3dHotspotGroup();
			if (hg) {
				let startObject = null;
				if (startElement !== undefined && startElement != me.divSkin) {
					if (startElement.ggId) {
						hg.traverse(function(el) {
							if (el.userData && el.userData.ggId === startElement.ggId) {
								startObject = el;
							}
						});
					}
				} else {
					startObject = hg;
				}
				if (startObject) {
					startObject.traverse(function(el) {
						if (el.userData && el.userData.ggUpdatePosition) {
							el.userData.ggUpdatePosition();
						}
					});
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('languagechanged', this.languageChanged);
	
	this.getClassStyles = function(className) {
		className = '.' + className;
		for (let sheet of document.styleSheets) {
			try {
				for (let rule of sheet.cssRules || sheet.rules) {
					if (rule.selectorText === className) {
						return rule.style;
					}
				}
			} catch (e) {
				console.warn("Cannot access stylesheet: ", e);
			}
		}
		return null;
	};
	this.paintTextDivToCanvas = function(el, stylesString, textureHeightFromEl, autoSize, scrollbar, measureOnly) {
		if (measureOnly === undefined) measureOnly = false;
		const skinStyles = skin.getClassStyles('ggskin');
		const skinTextStyles = skin.getClassStyles('ggskin_text');
		const skinStylesString = skinStyles ? skinStyles.cssText : '';
		const skinTextStylesString = skinTextStyles ? skinTextStyles.cssText : '';
		let elementStylesString = '';
		if (Array.isArray(el.userData.cssClasses)) {
			el.userData.cssClasses.forEach(function(className) {
				const classStyles = skin.getClassStyles(className);
				if (classStyles) {
					elementStylesString += classStyles.cssText;
				}
			});
		}
		const outerDiv = document.createElement('div');
		const textDiv = document.createElement('div');
		textDiv.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
		textDiv.style = skinStylesString + skinTextStylesString + elementStylesString + stylesString;
		textDiv.innerHTML = el.userData.ggText;
		textDiv.style.position = 'absolute';
		textDiv.style.left = '0px';
		textDiv.style.top = '0px';
		const styleTag = document.createElement('style');
		styleTag.type = 'text/css';
		styleTag.appendChild(document.createTextNode("@font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 300; src: local(''), url('fonts/montserrat-latin-300.woff2') format('woff2'); } @font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 400; src: local(''), url('fonts/montserrat-latin-regular.woff2') format('woff2'); } @font-face { font-family: 'Montserrat'; font-style: normal; font-weight: 600; src: local(''), url('fonts/montserrat-latin-600.woff2') format('woff2'); }"));
		outerDiv.appendChild(styleTag);
		outerDiv.appendChild(textDiv);
		document.body.appendChild(outerDiv);
		el.userData.boxWidthCanv = textDiv.clientWidth;
		el.userData.totalHeightCanv = textDiv.clientHeight;
		elStyle = window.getComputedStyle(textDiv);
		const lineHeight = elStyle.lineHeight;
		if (lineHeight !== 'normal') {
			el.userData.lineHeight = parseFloat(lineHeight);
		} else {
			el.userData.lineHeight = parseFloat(elStyle.fontSize) * 1.2;
		}
		if (measureOnly) {
			document.body.removeChild(outerDiv);
			return;
		}
		var canv = el.userData.tmpCanvas;
		var ctx = el.userData.tmpCanvasContext;
		canv.width = textDiv.clientWidth * 2;
		canv.height = textDiv.clientHeight * 2;
		ctx.clearRect(0, 0, canv.width, canv.height);
		if (autoSize) {
			el.userData.boxHeightCanv = el.userData.totalHeightCanv;
		} else {
			el.userData.boxHeightCanv = el.userData.height;
		}
		if (scrollbar && textDiv.clientHeight > el.userData.height) {
			el.userData.textCanvas.width = el.userData.width * 2;
		} else {
			el.userData.textCanvas.width = el.userData.boxWidthCanv * 2;
		}
		el.userData.textCanvas.height = el.userData.boxHeightCanv * 2;
		this.rasterizeHTML.drawHTML(outerDiv.innerHTML, canv, {zoom: 2, baseUrl: player.getBasePath() }).then((renderResult) => {
			el.userData.ggTextureFromCanvas();
		}, (err) => {
			console.error('Error rendering HTML to canvas:', err);
		});
		document.body.removeChild(outerDiv);
	};
	this.rectMaxRadius = function(el) {
		return Math.min(el.userData.width / 2.0 + (el.userData.borderWidth.left + el.userData.borderWidth.right) / 2.0, el.userData.height / 2.0 + (el.userData.borderWidth.top + el.userData.borderWidth.bottom) / 2.0);
	}
	this.rectCalcBorderRadiiInnerShape = function(el) {
		let maxRad = skin.rectMaxRadius(el);
		let bwTopLeft = (el.userData.borderWidth.top + el.userData.borderWidth.left) / 2.0;
		let brTopLeft = Math.max(el.userData.borderRadius.topLeft - bwTopLeft, 0.0);
		brTopLeft = Math.min(brTopLeft, maxRad - bwTopLeft);
		let bwTopRight = (el.userData.borderWidth.top + el.userData.borderWidth.right) / 2.0;
		let brTopRight = Math.max(el.userData.borderRadius.topRight - bwTopRight, 0.0);
		brTopRight = Math.min(brTopRight, maxRad - bwTopRight);
		let bwBottomRight = (el.userData.borderWidth.bottom + el.userData.borderWidth.right) / 2.0;
		let brBottomRight = Math.max(el.userData.borderRadius.bottomRight - bwBottomRight, 0.0);
		brBottomRight = Math.min(brBottomRight, maxRad - bwBottomRight);
		let bwBottomLeft = (el.userData.borderWidth.bottom + el.userData.borderWidth.left) / 2.0;
		let brBottomLeft = Math.max(el.userData.borderRadius.bottomLeft - bwBottomLeft, 0.0);
		brBottomLeft = Math.min(brBottomLeft, maxRad - bwBottomLeft);
		el.userData.borderRadiusInnerShape = {
			topLeft: brTopLeft,
			topRight: brTopRight,
			bottomRight: brBottomRight,
			bottomLeft: brBottomLeft
		};
	}
	this.rectHasRoundedCorners = function(el) {
		return (el.userData.borderRadius.topLeft > 0 || el.userData.borderRadius.topRight > 0 || el.userData.borderRadius.bottomRight > 0 || el.userData.borderRadius.bottomLeft > 0);
	}
	this.disposeGeometryAndMaterial = function(el) {
		if (el.geometry) el.geometry.dispose();
		el.geometry = null;
		if (el.material) el.material.dispose();
	}
	this.removeChildren = function(el, filter) {
		if (filter === undefined) filter ='^.*$';
		const pattern = new RegExp(filter);
		for (let i = el.children.length - 1; i >= 0; i--) {
			let child = el.children[i];
			if (pattern.test(child.name)) {
				if (child.isMesh) {
					skin.disposeGeometryAndMaterial(child);
				}
				el.remove(child);
			}
		}
	};
	this.getDepthFrom = function(root, object) {
		let depth = 0;
		let current = object;
		while (current && current !== root) {
			if (current.userData && current.userData.hasOwnProperty('ggId')) depth++;
			current = current.parent;
		}
		return current === root ? depth : -1;
	};
	this.getElementVrPosition = function(el, x, y) {
		var vrPos = {};
		var renderableEl = el.parent && (el.parent.type == 'Mesh' || el.parent.type == 'Group');
		switch (el.userData.hanchor) {
			case 0:
			vrPos.x = (0) - ((renderableEl ? el.parent.userData.width : 800) / 200.0) + (x / 100.0) + (el.userData.width / 200.0);
			break;
			case 1:
			vrPos.x = (0) + (x / 100.0);
			break;
			case 2:
			vrPos.x = (0) + ((renderableEl ? el.parent.userData.width : 800) / 200.0) - (x / 100.0) - (el.userData.width / 200.0);
			break;
		}
		switch (el.userData.vanchor) {
			case 0:
			vrPos.y = (0) + ((renderableEl ? el.parent.userData.height : 600) / 200.0) - (y / 100.0) - (el.userData.height / 200.0);
			break;
			case 1:
			vrPos.y = (0) - (y / 100.0);
			break;
			case 2:
			vrPos.y = (0) - ((renderableEl ? el.parent.userData.height : 600) / 200.0) + (y / 100.0) + (el.userData.height / 200.0);
			break;
		}
		vrPos.x += el.userData.curScaleOffX;
		vrPos.y += el.userData.curScaleOffY;
		return vrPos;
	}
	this.addSkin=function() {
		var hs='';
		var el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_phone_thumbs') == false)) && 
				((player.getVariableValue('vis_phone_info') == false)) && 
				((player.getVariableValue('vis_phone_floorplan') == false)) && 
				((player.getVariableValue('vis_phone_map') == false)) && 
				((player.getVariableValue('vis_phone_share') == false)) && 
				((player.getVariableValue('vis_phone_languages') == false)) && 
				((player.getVariableValue('vis_phone_image') == false)) && 
				((player.getVariableValue('vis_phone_pdf') == false)) && 
				((player.getVariableValue('vis_phone_youtube') == false)) && 
				((player.getVariableValue('vis_phone_vimeo') == false)) && 
				((player.getVariableValue('vis_phone_video_file') == false)) && 
				((player.getVariableValue('vis_phone_video_url') == false)) && 
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_opt_back_available = {};
		me._variable_opt_back_available.ggCurrentLogicState = -1;
		me._variable_opt_back_available.logicBlock = function() {
			var newLogicState_opt_back_available;
			if (
				((player.getVariableValue('opt_back') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newLogicState_opt_back_available = 0;
			}
			else {
				newLogicState_opt_back_available = -1;
			}
			if (me._variable_opt_back_available.ggCurrentLogicState != newLogicState_opt_back_available) {
				me._variable_opt_back_available.ggCurrentLogicState = newLogicState_opt_back_available;
				if (me._variable_opt_back_available.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_back_available', true);
				}
				else {
					player.setVariableValue('opt_back_available', false);
				}
			}
		}
		me._variable_opt_info_available = {};
		me._variable_opt_info_available.ggCurrentLogicState = -1;
		me._variable_opt_info_available.logicBlock = function() {
			var newLogicState_opt_info_available;
			if (
				((player.getVariableValue('opt_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicState_opt_info_available = 0;
			}
			else {
				newLogicState_opt_info_available = -1;
			}
			if (me._variable_opt_info_available.ggCurrentLogicState != newLogicState_opt_info_available) {
				me._variable_opt_info_available.ggCurrentLogicState = newLogicState_opt_info_available;
				if (me._variable_opt_info_available.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_info_available', true);
				}
				else {
					player.setVariableValue('opt_info_available', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._safe_area_main=document.createElement('div');
		el.ggId="safe_area_main";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_main.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_main.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_left=document.createElement('div');
		el.ggId="menu_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 32px;';
		hs+='height : 347px;';
		hs+='left : 32px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_left.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_maps') == false)) && 
				((player.getVariableValue('opt_floorplans') == false)) && 
				((player.getVariableValue('opt_back_available') == false)) && 
				((player.getVariableValue('opt_info_available') == false)) && 
				((player.getVariableValue('opt_share') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_left.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_left.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_left.style.transition='';
				if (me._menu_left.ggCurrentLogicStateVisible == 0) {
					me._menu_left.style.visibility="hidden";
					me._menu_left.ggVisible=false;
				}
				else if (me._menu_left.ggCurrentLogicStateVisible == 1) {
					me._menu_left.style.visibility=(Number(me._menu_left.style.opacity)>0||!me._menu_left.style.opacity)?'inherit':'hidden';
					me._menu_left.ggVisible=true;
				}
				else {
					me._menu_left.style.visibility="hidden";
					me._menu_left.ggVisible=false;
				}
			}
		}
		me._menu_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_left_container=document.createElement('div');
		el.ggId="menu_left_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 32px;';
		hs+='height : 315px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_left_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_left_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_left_slider=document.createElement('div');
		el.ggId="menu_left_slider";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px 25px 0px 0px;';
		hs+='bottom : -297px;';
		hs+='cursor : default;';
		hs+='height : 315px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_left_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_left_slider.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_maps') == true)) && 
				((player.getVariableValue('vis_menu_left') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_floorplans') == true)) && 
				((player.getVariableValue('vis_menu_left') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_back_available') == true)) && 
				((player.getVariableValue('vis_menu_left') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_info_available') == true)) && 
				((player.getVariableValue('vis_menu_left') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getVariableValue('opt_share') == true)) && 
				((player.getVariableValue('vis_menu_left') == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.getVariableValue('vis_menu_left') == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (JSON.stringify(me._menu_left_slider.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._menu_left_slider.ggConditionsTruePosition = newConditionsTruePosition;
				me._menu_left_slider.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._menu_left_slider.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_left_slider.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_left_slider.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_left_slider.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_left_slider.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_left_slider.ggConditionsTruePosition.includes(5)) {
					deltaX += 0;
					deltaY += 25;
				}
					me._menu_left_slider.style.left = 'calc(50% - (52px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._menu_left_slider.style.bottom=(-297+deltaY) + 'px';
			}
		}
		me._menu_left_slider.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_left_slider.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_left_slider.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_left_slider.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._menu_left_slider.ggCurrentLogicStateVisible == 0) {
					me._menu_left_slider.style.visibility=(Number(me._menu_left_slider.style.opacity)>0||!me._menu_left_slider.style.opacity)?'inherit':'hidden';
					me._menu_left_slider.ggVisible=true;
				}
				else {
					me._menu_left_slider.style.visibility="hidden";
					me._menu_left_slider.ggVisible=false;
				}
			}
		}
		me._menu_left_slider.ggUpdatePosition=function (useTransition) {
		}
		el=me._share_btn=document.createElement('div');
		els=me._share_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzAiIGN5PSI4LjMiIHI9IjUiLz4KIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjEwIiBjeT0iMjAiIHI9IjUiLz4KIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMwIiBjeT0iMzEuNyIgcj0iNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjE0LjMiIHgy'+
			'PSIyNS43IiB5MT0iMjIuNSIgeTI9IjI5LjEiLz4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIyNS43IiB4Mj0iMTQuMyIgeTE9IjEwLjkiIHkyPSIxNy41Ii8+Cjwvc3ZnPgo=';
		me._share_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._share_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzAiIGN5PSI4LjMiIHI9IjUiLz4KIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjEwIiBjeT0iMjAiIHI9IjUiLz4KIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMwIiBjeT0iMzEuNyIgcj0iNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjE0LjMiIHgy'+
			'PSIyNS43IiB5MT0iMjIuNSIgeTI9IjI5LjEiLz4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIyNS43IiB4Mj0iMTQuMyIgeTE9IjEwLjkiIHkyPSIxNy41Ii8+Cjwvc3ZnPgo=';
		me._share_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="share_btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._share_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share_btn.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_back_available') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._share_btn.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._share_btn.ggConditionsTruePosition = newConditionsTruePosition;
				me._share_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._share_btn.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._share_btn.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._share_btn.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._share_btn.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._share_btn.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._share_btn.style.top=(16+deltaY) + 'px';
			}
		}
		me._share_btn.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_share') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._share_btn.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._share_btn.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._share_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._share_btn.ggCurrentLogicStateAlpha == 0) {
					me._share_btn.style.visibility=me._share_btn.ggVisible?'inherit':'hidden';
					me._share_btn.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._share_btn.style.opacity == 0.0) { me._share_btn.style.visibility="hidden"; } }, 505);
					me._share_btn.style.opacity=0;
				}
			}
		}
		me._share_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_left') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._share_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._share_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._share_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._share_btn.ggCurrentLogicStateTabIndex == 0) {
					me._share_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._share_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._share_btn.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + player.getPan() + "," + player.getTilt() + "," + player.getFov() + ",4";
if (navigator.canShare) {
  player.setVariableValue('share_api', navigator.canShare({ url: text }) && player.getIsMobile());
  player.setVariableValue('share_url', text);
}
			if (
				(
					((player.getVariableValue('share_api') == true))
				)
			) {
				let shareUrl = player.getVariableValue('share_url');
navigator.share({ url: shareUrl });
			}
			if (
				(
					((player.getVariableValue('share_api') == false)) && 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_share', true);
			}
			if (
				(
					((player.getVariableValue('share_api') == false)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', !player.getVariableValue('vis_share'));
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_languages', false);
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_url_popup', false);
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_info_popup', false);
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_image_popup', false);
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_pdf_popup', false);
			}
			if (
				(
					((player.getVariableValue('share_api') == false))
				)
			) {
				player.setVariableValue('vis_video_popup', false);
			}
		}
		me._share_btn.onmouseenter=function (e) {
			me._share_btn__img.style.visibility='hidden';
			me._share_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['share_btn']=true;
		}
		me._share_btn.onmouseleave=function (e) {
			me._share_btn__img.style.visibility='inherit';
			me._share_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['share_btn']=false;
		}
		me._share_btn.ggUpdatePosition=function (useTransition) {
		}
		me._menu_left_slider.appendChild(me._share_btn);
		el=me._info_btn=document.createElement('div');
		els=me._info_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxOCIgY3k9IjE4IiByPSIxNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjE4IiB4Mj0iMTgiIHkxPSIyNCIgeTI9IjE4Ii8+'+
			'CiA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTgiIHgyPSIxOCIgeTE9IjEyIiB5Mj0iMTIiLz4KPC9zdmc+Cg==';
		me._info_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxOCIgY3k9IjE4IiByPSIxNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjE4IiB4Mj0iMTgiIHkxPSIyNCIgeTI9IjE4Ii8+'+
			'CiA8bGluZSBjbGFzcz0ic3QxIiB4MT0iMTgiIHgyPSIxOCIgeTE9IjEyIiB5Mj0iMTIiLz4KPC9zdmc+Cg==';
		me._info_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._info_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_btn.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getVariableValue('opt_back_available') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (JSON.stringify(me._info_btn.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._info_btn.ggConditionsTruePosition = newConditionsTruePosition;
				me._info_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._info_btn.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._info_btn.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._info_btn.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._info_btn.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._info_btn.style.top=(16+deltaY) + 'px';
			}
		}
		me._info_btn.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_info_available') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._info_btn.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._info_btn.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._info_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._info_btn.ggCurrentLogicStateAlpha == 0) {
					me._info_btn.style.visibility=me._info_btn.ggVisible?'inherit':'hidden';
					me._info_btn.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._info_btn.style.opacity == 0.0) { me._info_btn.style.visibility="hidden"; } }, 505);
					me._info_btn.style.opacity=0;
				}
			}
		}
		me._info_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_left') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._info_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._info_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._info_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._info_btn.ggCurrentLogicStateTabIndex == 0) {
					me._info_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._info_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._info_btn.onclick=function (e) {
				me._info_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_popup_title.ggUpdateText();
			me._info_popup_title.ggTextDiv.scrollTop = 0;
				me._info_popup_text.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_popup_text.ggUpdateText();
			me._info_popup_text.ggTextDiv.scrollTop = 0;
				me._phone_popup_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._phone_popup_title.ggUpdateText();
			me._phone_popup_title.ggTextDiv.scrollTop = 0;
				me._info_popup_text_phone.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._info_popup_text_phone.ggUpdateText();
			me._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == true)) && 
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_info', !player.getVariableValue('vis_info'));
			}
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_languages', false);
			}
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_url_popup', false);
			}
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_info_popup', false);
			}
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_image_popup', false);
			}
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_pdf_popup', false);
			}
			if (
				(
					((player._(me.ggUserdata.description) != ""))
				)
			) {
				player.setVariableValue('vis_video_popup', false);
			}
		}
		me._info_btn.onmouseenter=function (e) {
			me._info_btn__img.style.visibility='hidden';
			me._info_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['info_btn']=true;
		}
		me._info_btn.onmouseleave=function (e) {
			me._info_btn__img.style.visibility='inherit';
			me._info_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['info_btn']=false;
		}
		me._info_btn.ggUpdatePosition=function (useTransition) {
		}
		me._menu_left_slider.appendChild(me._info_btn);
		el=me._back_btn=document.createElement('div');
		els=me._back_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMTYuNyIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMjAsMTMuMyAxMy4zLDIwIDIwLDI2LjcgIi8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjYuNyIgeDI9IjEzLjMiIHkxPSIyMCIgeTI9IjIwIi8+Cjwvc3Zn'+
			'Pgo=';
		me._back_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._back_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMTYuNyIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMjAsMTMuMyAxMy4zLDIwIDIwLDI2LjcgIi8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjYuNyIgeDI9IjEzLjMiIHkxPSIyMCIgeTI9IjIwIi8+Cjwvc3Zn'+
			'Pgo=';
		me._back_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="back_btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._back_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._back_btn.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._back_btn.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._back_btn.ggConditionsTruePosition = newConditionsTruePosition;
				me._back_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._back_btn.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._back_btn.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._back_btn.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._back_btn.style.top=(16+deltaY) + 'px';
			}
		}
		me._back_btn.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_back_available') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._back_btn.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._back_btn.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._back_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._back_btn.ggCurrentLogicStateAlpha == 0) {
					me._back_btn.style.visibility=me._back_btn.ggVisible?'inherit':'hidden';
					me._back_btn.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._back_btn.style.opacity == 0.0) { me._back_btn.style.visibility="hidden"; } }, 505);
					me._back_btn.style.opacity=0;
				}
			}
		}
		me._back_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_left') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._back_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._back_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._back_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._back_btn.ggCurrentLogicStateTabIndex == 0) {
					me._back_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._back_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._back_btn.onclick=function (e) {
			player.goBack("");
		}
		me._back_btn.onmouseenter=function (e) {
			me._back_btn__img.style.visibility='hidden';
			me._back_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['back_btn']=true;
		}
		me._back_btn.onmouseleave=function (e) {
			me._back_btn__img.style.visibility='inherit';
			me._back_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['back_btn']=false;
		}
		me._back_btn.ggUpdatePosition=function (useTransition) {
		}
		me._menu_left_slider.appendChild(me._back_btn);
		el=me._floorplan_btn=document.createElement('div');
		els=me._floorplan_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxLjcsMTAgMS43LDM2LjcgMTMuMywzMCAyNi43LDM2LjcgMzguMywzMCAzOC4zLDMuMyAyNi43LDEwIDEzLjMsMy4zICIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEzLjMiIHgyPSIxMy4zIiB5MT0iMy4zIiB5Mj0iMzAiLz4KIDxsaW5lIGNs'+
			'YXNzPSJzdDAiIHgxPSIyNi43IiB4Mj0iMjYuNyIgeTE9IjEwIiB5Mj0iMzYuNyIvPgo8L3N2Zz4K';
		me._floorplan_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._floorplan_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxLjcsMTAgMS43LDM2LjcgMTMuMywzMCAyNi43LDM2LjcgMzguMywzMCAzOC4zLDMuMyAyNi43LDEwIDEzLjMsMy4zICIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEzLjMiIHgyPSIxMy4zIiB5MT0iMy4zIiB5Mj0iMzAiLz4KIDxsaW5lIGNs'+
			'YXNzPSJzdDAiIHgxPSIyNi43IiB4Mj0iMjYuNyIgeTE9IjEwIiB5Mj0iMzYuNyIvPgo8L3N2Zz4K';
		me._floorplan_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="floorplan_btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._floorplan_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floorplan_btn.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._floorplan_btn.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._floorplan_btn.ggConditionsTruePosition = newConditionsTruePosition;
				me._floorplan_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floorplan_btn.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._floorplan_btn.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._floorplan_btn.style.top=(16+deltaY) + 'px';
			}
		}
		me._floorplan_btn.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floorplan_btn.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floorplan_btn.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floorplan_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floorplan_btn.ggCurrentLogicStateAlpha == 0) {
					me._floorplan_btn.style.visibility=me._floorplan_btn.ggVisible?'inherit':'hidden';
					me._floorplan_btn.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floorplan_btn.style.opacity == 0.0) { me._floorplan_btn.style.visibility="hidden"; } }, 505);
					me._floorplan_btn.style.opacity=0;
				}
			}
		}
		me._floorplan_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_left') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._floorplan_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._floorplan_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._floorplan_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floorplan_btn.ggCurrentLogicStateTabIndex == 0) {
					me._floorplan_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._floorplan_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._floorplan_btn.onclick=function (e) {
				me._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_title.ggUpdateText();
			me._map_node_title.ggTextDiv.scrollTop = 0;
				me._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_description.ggUpdateText();
			me._map_node_description.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', !player.getVariableValue('vis_floorplan'));
			}
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_share', false);
			player.setVariableValue('vis_languages', false);
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
		}
		me._floorplan_btn.onmouseenter=function (e) {
			me._floorplan_btn__img.style.visibility='hidden';
			me._floorplan_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['floorplan_btn']=true;
		}
		me._floorplan_btn.onmouseleave=function (e) {
			me._floorplan_btn__img.style.visibility='inherit';
			me._floorplan_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['floorplan_btn']=false;
		}
		me._floorplan_btn.ggUpdatePosition=function (useTransition) {
		}
		me._menu_left_slider.appendChild(me._floorplan_btn);
		el=me._map_btn=document.createElement('div');
		els=me._map_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzEuNSwxNUMzMS41LDI1LjUsMTgsMzQuNSwxOCwzNC41UzQuNSwyNS41LDQuNSwxNWMwLTcuNSw2LTEzLjUsMTMuNS0xMy41UzMxLjUsNy41LDMxLjUsMTV6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxOCIgY3k9IjE1IiByPSI0LjUiLz4KPC9zdmc+Cg==';
		me._map_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzEuNSwxNUMzMS41LDI1LjUsMTgsMzQuNSwxOCwzNC41UzQuNSwyNS41LDQuNSwxNWMwLTcuNSw2LTEzLjUsMTMuNS0xMy41UzMxLjUsNy41LDMxLjUsMTV6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxOCIgY3k9IjE1IiByPSI0LjUiLz4KPC9zdmc+Cg==';
		me._map_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._map_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_btn.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_btn.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_btn.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_btn.style.transition='opacity 500ms ease 0ms';
				if (me._map_btn.ggCurrentLogicStateAlpha == 0) {
					me._map_btn.style.visibility=me._map_btn.ggVisible?'inherit':'hidden';
					me._map_btn.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_btn.style.opacity == 0.0) { me._map_btn.style.visibility="hidden"; } }, 505);
					me._map_btn.style.opacity=0;
				}
			}
		}
		me._map_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_left') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._map_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._map_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._map_btn.style.transition='opacity 500ms ease 0ms';
				if (me._map_btn.ggCurrentLogicStateTabIndex == 0) {
					me._map_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._map_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._map_btn.onclick=function (e) {
				me._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_title.ggUpdateText();
			me._map_node_title.ggTextDiv.scrollTop = 0;
				me._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_description.ggUpdateText();
			me._map_node_description.ggTextDiv.scrollTop = 0;
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', !player.getVariableValue('vis_map'));
			}
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_share', false);
			player.setVariableValue('vis_languages', false);
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
		}
		me._map_btn.onmouseenter=function (e) {
			me._map_btn__img.style.visibility='hidden';
			me._map_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['map_btn']=true;
		}
		me._map_btn.onmouseleave=function (e) {
			me._map_btn__img.style.visibility='inherit';
			me._map_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['map_btn']=false;
		}
		me._map_btn.ggUpdatePosition=function (useTransition) {
		}
		me._menu_left_slider.appendChild(me._map_btn);
		me._menu_left_container.appendChild(me._menu_left_slider);
		me._menu_left.appendChild(me._menu_left_container);
		el=me._menu_left_icon_bg=document.createElement('div');
		el.ggId="menu_left_icon_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle gradient";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._menu_left_icon_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_left_icon_bg.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._menu_left_icon_bg.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._menu_left_icon_bg.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._menu_left_icon_bg.style.transition='';
				if (me._menu_left_icon_bg.ggCurrentLogicStateTabIndex == 0) {
					me._menu_left_icon_bg.setAttribute('tabindex', '-1');
				}
				else {
					me._menu_left_icon_bg.setAttribute('tabindex', '0');
				}
			}
		}
		me._menu_left_icon_bg.onclick=function (e) {
			player.setVariableValue('vis_menu_left', !player.getVariableValue('vis_menu_left'));
		}
		me._menu_left_icon_bg.onmouseenter=function (e) {
			me.elementMouseOver['menu_left_icon_bg']=true;
			me._menu_left_icon.logicBlock_visible();
			me._menu_left_icon_active.logicBlock_visible();
		}
		me._menu_left_icon_bg.onmouseleave=function (e) {
			me.elementMouseOver['menu_left_icon_bg']=false;
			me._menu_left_icon.logicBlock_visible();
			me._menu_left_icon_active.logicBlock_visible();
		}
		me._menu_left_icon_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_left_icon=document.createElement('div');
		els=me._menu_left_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMS43Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMCIgY3k9IjguMyIgcj0iMS43Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMCIgY3k9IjMxLjciIHI9IjEuNyIvPgo8L3N2Zz4K';
		me._menu_left_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_left_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_left_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_left_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_left_icon_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_left_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_left_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_left_icon.style.transition='';
				if (me._menu_left_icon.ggCurrentLogicStateVisible == 0) {
					me._menu_left_icon.style.visibility="hidden";
					me._menu_left_icon.ggVisible=false;
				}
				else {
					me._menu_left_icon.style.visibility=(Number(me._menu_left_icon.style.opacity)>0||!me._menu_left_icon.style.opacity)?'inherit':'hidden';
					me._menu_left_icon.ggVisible=true;
				}
			}
		}
		me._menu_left_icon.ggUpdatePosition=function (useTransition) {
		}
		me._menu_left_icon_bg.appendChild(me._menu_left_icon);
		el=me._menu_left_icon_active=document.createElement('div');
		els=me._menu_left_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMS43Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMCIgY3k9IjguMyIgcj0iMS43Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIyMCIgY3k9IjMxLjciIHI9IjEuNyIvPgo8L3N2Zz4K';
		me._menu_left_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_left_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_left_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_left_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_left_icon_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_left_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_left_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_left_icon_active.style.transition='';
				if (me._menu_left_icon_active.ggCurrentLogicStateVisible == 0) {
					me._menu_left_icon_active.style.visibility=(Number(me._menu_left_icon_active.style.opacity)>0||!me._menu_left_icon_active.style.opacity)?'inherit':'hidden';
					me._menu_left_icon_active.ggVisible=true;
				}
				else {
					me._menu_left_icon_active.style.visibility="hidden";
					me._menu_left_icon_active.ggVisible=false;
				}
			}
		}
		me._menu_left_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_left_icon_bg.appendChild(me._menu_left_icon_active);
		me._menu_left.appendChild(me._menu_left_icon_bg);
		me._safe_area_main.appendChild(me._menu_left);
		el=me._menu_center=document.createElement('div');
		el.ggId="menu_center";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 32px;';
		hs+='height : 52px;';
		hs+='left : 96px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 200px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_center.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_center.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getNodesCount() > 1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_center.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_center.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_center.style.transition='';
				if (me._menu_center.ggCurrentLogicStateVisible == 0) {
					me._menu_center.style.visibility=(Number(me._menu_center.style.opacity)>0||!me._menu_center.style.opacity)?'inherit':'hidden';
					me._menu_center.ggVisible=true;
				}
				else {
					me._menu_center.style.visibility="hidden";
					me._menu_center.ggVisible=false;
				}
			}
		}
		me._menu_center.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_center_container=document.createElement('div');
		el.ggId="menu_center_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 52px;';
		hs+='left : 26px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 26px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_center_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_center_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_center_slider=document.createElement('div');
		el.ggId="menu_center_slider";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 52px;';
		hs+='left : -100%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_center_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_center_slider.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_menu_center') == true)) && 
				((player.getVariableValue('resp_phone') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_center_slider.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_center_slider.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_center_slider.style.transition='left 700ms ease-in-out 0ms, top 700ms ease-in-out 0ms';
				if (me._menu_center_slider.ggCurrentLogicStatePosition == 0) {
					me._menu_center_slider.style.left='0%';
					me._menu_center_slider.style.top='0%';
				}
				else {
					me._menu_center_slider.style.left='-100%';
					me._menu_center_slider.style.top='0%';
				}
			}
		}
		me._menu_center_slider.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_center_bg=document.createElement('div');
		el.ggId="menu_center_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 26px 26px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_center_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_center_bg.ggUpdatePosition=function (useTransition) {
		}
		me._menu_center_slider.appendChild(me._menu_center_bg);
		el=me._project_title=document.createElement('div');
		els=me._project_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="project_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat_light";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 10px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 34px;';
		hs+='left : 45px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 28px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._project_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(player.getNodeUserdata('_master').title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._project_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._project_title.ggUpdateText();
		});
		el.appendChild(els);
		me._project_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._project_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_proj_title') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._project_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._project_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._project_title.style.transition='';
				if (me._project_title.ggCurrentLogicStateVisible == 0) {
					me._project_title.style.visibility=(Number(me._project_title.style.opacity)>0||!me._project_title.style.opacity)?'inherit':'hidden';
					me._project_title.ggVisible=true;
				}
				else {
					me._project_title.style.visibility="hidden";
					me._project_title.ggVisible=false;
				}
			}
		}
		me._project_title.ggUpdatePosition=function (useTransition) {
		}
		me._menu_center_slider.appendChild(me._project_title);
		me._menu_center_container.appendChild(me._menu_center_slider);
		me._menu_center.appendChild(me._menu_center_container);
		el=me._thumbnail_menu=document.createElement('div');
		el.ggId="thumbnail_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 130px;';
		hs+='left : 40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 80px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player._(player.getNodeUserdata('_master').title) != ""))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._thumbnail_menu.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._thumbnail_menu.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._thumbnail_menu.ggCurrentLogicStatePosition == 0) {
					me._thumbnail_menu.style.left='calc(25% + 40px)';
					me._thumbnail_menu.style.bottom='5px';
				}
				else {
					me._thumbnail_menu.style.left='40px';
					me._thumbnail_menu.style.bottom='5px';
				}
			}
		}
		me._thumbnail_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_proj_title') == true)) && 
				((player._(player.getNodeUserdata('_master').title) != ""))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._thumbnail_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._thumbnail_menu.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._thumbnail_menu.ggCurrentLogicStateSize == 0) {
					me._thumbnail_menu.style.width='calc(75% - 85px)';
					me._thumbnail_menu.style.height='130px';
					skin.updateSize(me._thumbnail_menu);
				}
				else {
					me._thumbnail_menu.style.width='calc(100% - 80px)';
					me._thumbnail_menu.style.height='130px';
					skin.updateSize(me._thumbnail_menu);
				}
			}
		}
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style.transition='left 0s, bottom 0s, width 0s, height 0s';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
				else {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
			}
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbs_left=document.createElement('div');
		els=me._thumbs_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIyMi41LDI3IDEzLjUsMTggMjIuNSw5ICIvPgo8L3N2Zz4K';
		me._thumbs_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbs_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIyMi41LDI3IDEzLjUsMTggMjIuNSw5ICIvPgo8L3N2Zz4K';
		me._thumbs_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbs_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg shadow";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._thumbs_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_left.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('node_cloner_hasDown') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_left.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_left.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_left.style.transition='';
				if (me._thumbs_left.ggCurrentLogicStateVisible == 0) {
					me._thumbs_left.style.visibility="hidden";
					me._thumbs_left.ggVisible=false;
				}
				else {
					me._thumbs_left.style.visibility=(Number(me._thumbs_left.style.opacity)>0||!me._thumbs_left.style.opacity)?'inherit':'hidden';
					me._thumbs_left.ggVisible=true;
				}
			}
		}
		me._thumbs_left.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._thumbs_left.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._thumbs_left.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._thumbs_left.style.transition='';
				if (me._thumbs_left.ggCurrentLogicStateTabIndex == 0) {
					me._thumbs_left.setAttribute('tabindex', '-1');
				}
				else {
					me._thumbs_left.setAttribute('tabindex', '0');
				}
			}
		}
		me._thumbs_left.logicBlock_cssclasses = function() {
			var newLogicStateCssClasses;
			if (
				((player.getBrowser() == 3))
			)
			{
				newLogicStateCssClasses = 0;
			}
			else {
				newLogicStateCssClasses = -1;
			}
			if (me._thumbs_left.ggCurrentLogicStateCssClasses != newLogicStateCssClasses) {
				me._thumbs_left.ggCurrentLogicStateCssClasses = newLogicStateCssClasses;
				me._thumbs_left.style.transition='';
				if (me._thumbs_left.ggCurrentLogicStateCssClasses == 0) {
					me._thumbs_left.className = 'ggskin ggskin_svg ';
				}
				else {
					me._thumbs_left.className = 'ggskin ggskin_svg shadow';
				}
			}
		}
		me._thumbs_left.onclick=function (e) {
			skin.findElements('node_cloner')[0].ggGoDown();
		}
		me._thumbs_left.onmouseenter=function (e) {
			me._thumbs_left__img.style.visibility='hidden';
			me._thumbs_left__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbs_left']=true;
		}
		me._thumbs_left.onmouseleave=function (e) {
			me._thumbs_left__img.style.visibility='inherit';
			me._thumbs_left__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbs_left']=false;
		}
		me._thumbs_left.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu.appendChild(me._thumbs_left);
		el=me._node_cloner=document.createElement('div');
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 130;
		el.ggHeight = 130;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._node_cloner.ggCloneOffset + me._node_cloner.ggNumCols <= me._node_cloner.ggNumFilterPassed) {
				me._node_cloner.ggCloneOffset += me._node_cloner.ggNumCols;
				me._node_cloner.ggCloneOffsetChanged = true;
				me._node_cloner.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._node_cloner.ggCloneOffset > 0) {
				me._node_cloner.ggCloneOffset -= me._node_cloner.ggNumCols;
				me._node_cloner.ggCloneOffset = Math.max(me._node_cloner.ggCloneOffset, 0);
				me._node_cloner.ggCloneOffsetChanged = true;
				me._node_cloner.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (!nodeData['tags'] || nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			var parentWidth = me._node_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner.parentNode.parentNode.ggAvailableWidth : me._node_cloner.parentNode.parentNode.clientWidth) : me._node_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner.offsetLeft) * me._node_cloner.ggNumRepeat / 100.0) / me._node_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && false) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
			centerOffsetHor = ((parentWidth - me._node_cloner.offsetLeft) % me._node_cloner.offsetWidth) / 2;
				me._node_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner.getFilteredNodes(tourNodes, filter);
			numNodes = tourNodes.length;
			if ((parentWidth - me._node_cloner.offsetLeft) > (me._node_cloner.offsetWidth * numNodes)) {
				centerOffsetHor = ((parentWidth - me._node_cloner.offsetLeft) - (me._node_cloner.offsetWidth * numNodes)) / 2;
			}
			me._node_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					keepCloning = false;
				}
			}
			player.setVariableValue('node_cloner_hasDown', me._node_cloner.ggCloneOffset > 0);
			player.setVariableValue('node_cloner_hasUp', me._node_cloner.ggCloneOffset + me._node_cloner.ggNumCols < me._node_cloner.ggNumFilterPassed);
			me._node_cloner.ggNodeCount = me._node_cloner.ggNumFilterPassed;
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode && me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 130px;';
		hs+='left : 50px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_cloner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_cloner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_cloner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_cloner.style.transition='';
				if (me._node_cloner.ggCurrentLogicStateVisible == 0) {
					me._node_cloner.style.visibility="hidden";
					me._node_cloner.ggVisible=false;
				}
				else {
					me._node_cloner.style.visibility=(Number(me._node_cloner.style.opacity)>0||!me._node_cloner.style.opacity)?'inherit':'hidden';
					me._node_cloner.ggVisible=true;
				}
			}
		}
		me._node_cloner.ggCurrentLogicStateVisible = -1;
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
			me._node_cloner.ggUpdate();
		}
		me._thumbnail_menu.appendChild(me._node_cloner);
		el=me._thumbs_right=document.createElement('div');
		els=me._thumbs_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIxMy41LDI3IDIyLjUsMTggMTMuNSw5ICIvPgo8L3N2Zz4K';
		me._thumbs_right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbs_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIxMy41LDI3IDIyLjUsMTggMTMuNSw5ICIvPgo8L3N2Zz4K';
		me._thumbs_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbs_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg shadow";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 70px;';
		hs+='position : absolute;';
		hs+='right : -48px;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 70px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._thumbs_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbs_right.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('node_cloner_hasUp') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbs_right.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbs_right.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbs_right.style.transition='';
				if (me._thumbs_right.ggCurrentLogicStateVisible == 0) {
					me._thumbs_right.style.visibility="hidden";
					me._thumbs_right.ggVisible=false;
				}
				else {
					me._thumbs_right.style.visibility=(Number(me._thumbs_right.style.opacity)>0||!me._thumbs_right.style.opacity)?'inherit':'hidden';
					me._thumbs_right.ggVisible=true;
				}
			}
		}
		me._thumbs_right.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._thumbs_right.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._thumbs_right.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._thumbs_right.style.transition='';
				if (me._thumbs_right.ggCurrentLogicStateTabIndex == 0) {
					me._thumbs_right.setAttribute('tabindex', '-1');
				}
				else {
					me._thumbs_right.setAttribute('tabindex', '0');
				}
			}
		}
		me._thumbs_right.logicBlock_cssclasses = function() {
			var newLogicStateCssClasses;
			if (
				((player.getBrowser() == 3))
			)
			{
				newLogicStateCssClasses = 0;
			}
			else {
				newLogicStateCssClasses = -1;
			}
			if (me._thumbs_right.ggCurrentLogicStateCssClasses != newLogicStateCssClasses) {
				me._thumbs_right.ggCurrentLogicStateCssClasses = newLogicStateCssClasses;
				me._thumbs_right.style.transition='';
				if (me._thumbs_right.ggCurrentLogicStateCssClasses == 0) {
					me._thumbs_right.className = 'ggskin ggskin_svg ';
				}
				else {
					me._thumbs_right.className = 'ggskin ggskin_svg shadow';
				}
			}
		}
		me._thumbs_right.onclick=function (e) {
			skin.findElements('node_cloner')[0].ggGoUp();
		}
		me._thumbs_right.onmouseenter=function (e) {
			me._thumbs_right__img.style.visibility='hidden';
			me._thumbs_right__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbs_right']=true;
		}
		me._thumbs_right.onmouseleave=function (e) {
			me._thumbs_right__img.style.visibility='inherit';
			me._thumbs_right__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbs_right']=false;
		}
		me._thumbs_right.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_menu.appendChild(me._thumbs_right);
		me._menu_center.appendChild(me._thumbnail_menu);
		el=me._menu_center_button_bg=document.createElement('div');
		el.ggId="menu_center_button_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle gradient";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._menu_center_button_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_center_button_bg.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._menu_center_button_bg.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._menu_center_button_bg.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._menu_center_button_bg.style.transition='';
				if (me._menu_center_button_bg.ggCurrentLogicStateTabIndex == 0) {
					me._menu_center_button_bg.setAttribute('tabindex', '-1');
				}
				else {
					me._menu_center_button_bg.setAttribute('tabindex', '0');
				}
			}
		}
		me._menu_center_button_bg.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_menu_center', !player.getVariableValue('vis_menu_center'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', !player.getVariableValue('vis_phone_thumbs'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				me._node_cloner_phone.ggText="";
				me._node_cloner_phone.ggUpdate([]);
				skin.updateSize(skin.divSkin);
			}
		}
		me._menu_center_button_bg.onmouseenter=function (e) {
			me.elementMouseOver['menu_center_button_bg']=true;
			me._menu_center_icon.logicBlock_visible();
			me._menu_center_icon_active.logicBlock_visible();
		}
		me._menu_center_button_bg.onmouseleave=function (e) {
			me.elementMouseOver['menu_center_button_bg']=false;
			me._menu_center_icon.logicBlock_visible();
			me._menu_center_icon_active.logicBlock_visible();
		}
		me._menu_center_button_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_center_icon=document.createElement('div');
		els=me._menu_center_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMS43Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMS43IiBjeT0iMjAiIHI9IjEuNyIvPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iOC4zIiBjeT0iMjAiIHI9IjEuNyIvPgo8L3N2Zz4K';
		me._menu_center_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_center_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_center_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_center_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_center_button_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_center_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_center_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_center_icon.style.transition='';
				if (me._menu_center_icon.ggCurrentLogicStateVisible == 0) {
					me._menu_center_icon.style.visibility="hidden";
					me._menu_center_icon.ggVisible=false;
				}
				else {
					me._menu_center_icon.style.visibility=(Number(me._menu_center_icon.style.opacity)>0||!me._menu_center_icon.style.opacity)?'inherit':'hidden';
					me._menu_center_icon.ggVisible=true;
				}
			}
		}
		me._menu_center_icon.ggUpdatePosition=function (useTransition) {
		}
		me._menu_center_button_bg.appendChild(me._menu_center_icon);
		el=me._menu_center_icon_active=document.createElement('div');
		els=me._menu_center_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iMS43Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIzMS43IiBjeT0iMjAiIHI9IjEuNyIvPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iOC4zIiBjeT0iMjAiIHI9IjEuNyIvPgo8L3N2Zz4K';
		me._menu_center_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_center_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_center_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_center_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_center_button_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_center_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_center_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_center_icon_active.style.transition='';
				if (me._menu_center_icon_active.ggCurrentLogicStateVisible == 0) {
					me._menu_center_icon_active.style.visibility=(Number(me._menu_center_icon_active.style.opacity)>0||!me._menu_center_icon_active.style.opacity)?'inherit':'hidden';
					me._menu_center_icon_active.ggVisible=true;
				}
				else {
					me._menu_center_icon_active.style.visibility="hidden";
					me._menu_center_icon_active.ggVisible=false;
				}
			}
		}
		me._menu_center_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_center_button_bg.appendChild(me._menu_center_icon_active);
		me._menu_center.appendChild(me._menu_center_button_bg);
		me._safe_area_main.appendChild(me._menu_center);
		el=me._menu_right=document.createElement('div');
		el.ggId="menu_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 32px;';
		hs+='height : 347px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_right.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_right.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_right.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_right.style.transition='';
				if (me._menu_right.ggCurrentLogicStateVisible == 0) {
					me._menu_right.style.visibility=(Number(me._menu_right.style.opacity)>0||!me._menu_right.style.opacity)?'inherit':'hidden';
					me._menu_right.ggVisible=true;
				}
				else {
					me._menu_right.style.visibility="hidden";
					me._menu_right.ggVisible=false;
				}
			}
		}
		me._menu_right.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_right_container=document.createElement('div');
		el.ggId="menu_right_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 32px;';
		hs+='height : 315px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_right_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_right_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_right_slider=document.createElement('div');
		el.ggId="menu_right_slider";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px 25px 0px 0px;';
		hs+='bottom : -297px;';
		hs+='cursor : default;';
		hs+='height : 315px;';
		hs+='left : calc(50% - ((52px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_right_slider.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_right_slider.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getProjectTranslations().length > 1)) && 
				((player.getVariableValue('vis_menu_right') == true))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_auto_rot') == true)) && 
				((player.getVariableValue('vis_menu_right') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getPointHotspotIds().length > 0)) && 
				((player.getVariableValue('vis_menu_right') == true))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getHasSounds() == true)) && 
				((player.getVariableValue('vis_menu_right') == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true)) && 
				((player.getVariableValue('vis_menu_right') == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.hasVR() == true)) && 
				((player.getVariableValue('vis_menu_right') == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true)) && 
				((player.getVariableValue('vis_menu_right') == true))
			)
			{
				newConditionsTruePosition.push(6);
			}
			if (
				((player.getVariableValue('vis_menu_right') == true))
			)
			{
				newConditionsTruePosition.push(7);
			}
			if (JSON.stringify(me._menu_right_slider.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._menu_right_slider.ggConditionsTruePosition = newConditionsTruePosition;
				me._menu_right_slider.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._menu_right_slider.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_right_slider.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_right_slider.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_right_slider.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_right_slider.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_right_slider.ggConditionsTruePosition.includes(5)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_right_slider.ggConditionsTruePosition.includes(6)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._menu_right_slider.ggConditionsTruePosition.includes(7)) {
					deltaX += 0;
					deltaY += 25;
				}
					me._menu_right_slider.style.left = 'calc(50% - (52px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._menu_right_slider.style.bottom=(-297+deltaY) + 'px';
			}
		}
		me._menu_right_slider.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_right_slider.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_right_slider.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_right_slider.style.transition='left 500ms ease 0ms, bottom 500ms ease 0ms';
				if (me._menu_right_slider.ggCurrentLogicStateVisible == 0) {
					me._menu_right_slider.style.visibility=(Number(me._menu_right_slider.style.opacity)>0||!me._menu_right_slider.style.opacity)?'inherit':'hidden';
					me._menu_right_slider.ggVisible=true;
				}
				else {
					me._menu_right_slider.style.visibility="hidden";
					me._menu_right_slider.ggVisible=false;
				}
			}
		}
		me._menu_right_slider.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_gyro=document.createElement('div');
		el.ggId="toggle_gyro";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._toggle_gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle_gyro.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_auto_rot') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (
				((player.hasVR() == true))
			)
			{
				newConditionsTruePosition.push(5);
			}
			if (JSON.stringify(me._toggle_gyro.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._toggle_gyro.ggConditionsTruePosition = newConditionsTruePosition;
				me._toggle_gyro.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_gyro.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_gyro.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_gyro.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_gyro.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_gyro.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_gyro.ggConditionsTruePosition.includes(5)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._toggle_gyro.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._toggle_gyro.style.top=(16+deltaY) + 'px';
			}
		}
		me._toggle_gyro.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_gyro') == true)) && 
				((player.getGyroAvailable() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._toggle_gyro.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._toggle_gyro.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._toggle_gyro.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_gyro.ggCurrentLogicStateAlpha == 0) {
					me._toggle_gyro.style.visibility=me._toggle_gyro.ggVisible?'inherit':'hidden';
					me._toggle_gyro.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._toggle_gyro.style.opacity == 0.0) { me._toggle_gyro.style.visibility="hidden"; } }, 505);
					me._toggle_gyro.style.opacity=0;
				}
			}
		}
		me._toggle_gyro.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_right') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._toggle_gyro.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._toggle_gyro.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._toggle_gyro.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_gyro.ggCurrentLogicStateTabIndex == 0) {
					me._toggle_gyro.setAttribute('tabindex', '-1');
				}
				else {
					me._toggle_gyro.setAttribute('tabindex', '0');
				}
			}
		}
		me._toggle_gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._toggle_gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._gyro_off=document.createElement('div');
		els=me._gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8yX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluay'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojNGZiNWMyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9JiN4ZDsKPC9zdHlsZT4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxLjUiIHgyPSIzNC41IiB5MT0iMS41IiB5Mj0iMzQuNSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjcsMjMuN2MtMS45LDAuMy0zLjgsMC40LTUuNywwLjRjLTkuMSwwLTE2LjUtMi43LTE2LjUtNi4xYzAtMi42LDQuNS00LjksMTAuOC01LjciLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9'+
			'Ik0yMC41LDEyYzgsMC40LDE0LDMsMTQsNmMwLDEuNS0xLjUsMi45LTQsNCIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjYsNy4xYzIuOS0zLjYsNi4yLTUuNCw4LjYtNC40YzMuNCwxLjQsNC4xLDcuOCwxLjksMTUiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMy43LDIzLjdjLTMuNSw2LjgtOC42LDExLTEyLDkuNmMtMy45LTEuNi00LjItOS43LTAuOC0xOC4xYzAuNC0xLDAuOC0xLjksMS4zLTIuOCIvPgo8L3N2Zz4K';
		me._gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8yX2NvcHkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDM2IDM2OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluay'+
			'IgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9JiN4ZDsKPC9zdHlsZT4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxLjUiIHgyPSIzNC41IiB5MT0iMS41IiB5Mj0iMzQuNSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjcsMjMuN2MtMS45LDAuMy0zLjgsMC40LTUuNywwLjRjLTkuMSwwLTE2LjUtMi43LTE2LjUtNi4xYzAtMi42LDQuNS00LjksMTAuOC01LjciLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9'+
			'Ik0yMC41LDEyYzgsMC40LDE0LDMsMTQsNmMwLDEuNS0xLjUsMi45LTQsNCIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjYsNy4xYzIuOS0zLjYsNi4yLTUuNCw4LjYtNC40YzMuNCwxLjQsNC4xLDcuOCwxLjksMTUiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMy43LDIzLjdjLTMuNSw2LjgtOC42LDExLTEyLDkuNmMtMy45LTEuNi00LjItOS43LTAuOC0xOC4xYzAuNC0xLDAuOC0xLjksMS4zLTIuOCIvPgo8L3N2Zz4K';
		me._gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_off.style.transition='';
				if (me._gyro_off.ggCurrentLogicStateVisible == 0) {
					me._gyro_off.style.visibility=(Number(me._gyro_off.style.opacity)>0||!me._gyro_off.style.opacity)?'inherit':'hidden';
					me._gyro_off.ggVisible=true;
				}
				else {
					me._gyro_off.style.visibility="hidden";
					me._gyro_off.ggVisible=false;
				}
			}
		}
		me._gyro_off.onmouseenter=function (e) {
			me._gyro_off__img.style.visibility='hidden';
			me._gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_off']=true;
		}
		me._gyro_off.onmouseleave=function (e) {
			me._gyro_off__img.style.visibility='inherit';
			me._gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_off']=false;
		}
		me._gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_gyro.appendChild(me._gyro_off);
		el=me._gyro_on=document.createElement('div');
		els=me._gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8yXzFfIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIH'+
			'k9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTU4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjAxODY7fSYjeGQ7Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut'+
			'bGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOCIgcng9IjE2LjUiIHJ5PSI2LjEiLz4KIDxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxOC4xIiBjeT0iMTcuOSIgcng9IjE2LjYiIHJ5PSI3LjYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzc4MiAtMC45MjU3IDAuOTI1NyAwLjM3ODIgLTUuMzM0OSAyNy44OTcxKSIvPgogPGxpbmUgY2xhc3M9InN0MiIgeDE9IjE4IiB4Mj0iMTgiIHkxPSIxOCIgeTI9IjE4Ii8+Cjwvc3ZnPgo=';
		me._gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8yXzFfIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIH'+
			'k9IjBweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTU4O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0LjAxODY7fSYjeGQ7Cgkuc3Qye2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2Ut'+
			'bGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOCIgcng9IjE2LjUiIHJ5PSI2LjEiLz4KIDxlbGxpcHNlIGNsYXNzPSJzdDEiIGN4PSIxOC4xIiBjeT0iMTcuOSIgcng9IjE2LjYiIHJ5PSI3LjYiIHRyYW5zZm9ybT0ibWF0cml4KDAuMzc4MiAtMC45MjU3IDAuOTI1NyAwLjM3ODIgLTUuMzM0OSAyNy44OTcxKSIvPgogPGxpbmUgY2xhc3M9InN0MiIgeDE9IjE4IiB4Mj0iMTgiIHkxPSIxOCIgeTI9IjE4Ii8+Cjwvc3ZnPgo=';
		me._gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="gyro on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gyro_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._gyro_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._gyro_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._gyro_on.style.transition='';
				if (me._gyro_on.ggCurrentLogicStateVisible == 0) {
					me._gyro_on.style.visibility="hidden";
					me._gyro_on.ggVisible=false;
				}
				else {
					me._gyro_on.style.visibility=(Number(me._gyro_on.style.opacity)>0||!me._gyro_on.style.opacity)?'inherit':'hidden';
					me._gyro_on.ggVisible=true;
				}
			}
		}
		me._gyro_on.onmouseenter=function (e) {
			me._gyro_on__img.style.visibility='hidden';
			me._gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['gyro_on']=true;
		}
		me._gyro_on.onmouseleave=function (e) {
			me._gyro_on__img.style.visibility='inherit';
			me._gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['gyro_on']=false;
		}
		me._gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_gyro.appendChild(me._gyro_on);
		me._menu_right_slider.appendChild(me._toggle_gyro);
		el=me._vr_btn=document.createElement('div');
		els=me._vr_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNiwxMi43aDI0YzEuNywwLDMsMS4xLDMsMi43djkuNGMwLDEuNy0xLjMsMy0zLDNoLTQuNmMtMS4xLDAtMi4xLTAuNi0yLjctMS42bC0yLjYtNC41Yy0wLjMtMC42LTEtMS0xLjctMSYjeGQ7JiN4YTsmI3g5O2gtMC45Yy0wLjcsMC0xLjMsMC40LTEuNiwwLjlsLTIuOCw0LjZjLTAuNiwwLjktMS42LDEu'+
			'NS0yLjYsMS41SDZjLTEuNywwLTMtMS4zLTMtM3YtOS40QzMsMTMuOCw0LjMsMTIuNyw2LDEyLjd6Ii8+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIxMy4yLDEyLjcgMTMuMiw0LjIgMjIuOCw0LjIgMjIuOCwxMi43ICIvPgo8L3N2Zz4K';
		me._vr_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._vr_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNiwxMi43aDI0YzEuNywwLDMsMS4xLDMsMi43djkuNGMwLDEuNy0xLjMsMy0zLDNoLTQuNmMtMS4xLDAtMi4xLTAuNi0yLjctMS42bC0yLjYtNC41Yy0wLjMtMC42LTEtMS0xLjctMSYjeGQ7JiN4YTsmI3g5O2gtMC45Yy0wLjcsMC0xLjMsMC40LTEuNiwwLjlsLTIuOCw0LjZjLTAuNiwwLjktMS42LDEu'+
			'NS0yLjYsMS41SDZjLTEuNywwLTMtMS4zLTMtM3YtOS40QzMsMTMuOCw0LjMsMTIuNyw2LDEyLjd6Ii8+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIxMy4yLDEyLjcgMTMuMiw0LjIgMjIuOCw0LjIgMjIuOCwxMi43ICIvPgo8L3N2Zz4K';
		me._vr_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="vr_btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._vr_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vr_btn.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_auto_rot') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newConditionsTruePosition.push(4);
			}
			if (JSON.stringify(me._vr_btn.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._vr_btn.ggConditionsTruePosition = newConditionsTruePosition;
				me._vr_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._vr_btn.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._vr_btn.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._vr_btn.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._vr_btn.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._vr_btn.ggConditionsTruePosition.includes(4)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._vr_btn.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._vr_btn.style.top=(16+deltaY) + 'px';
			}
		}
		me._vr_btn.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._vr_btn.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._vr_btn.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._vr_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._vr_btn.ggCurrentLogicStateAlpha == 0) {
					me._vr_btn.style.visibility=me._vr_btn.ggVisible?'inherit':'hidden';
					me._vr_btn.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._vr_btn.style.opacity == 0.0) { me._vr_btn.style.visibility="hidden"; } }, 505);
					me._vr_btn.style.opacity=0;
				}
			}
		}
		me._vr_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_right') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._vr_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._vr_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._vr_btn.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._vr_btn.ggCurrentLogicStateTabIndex == 0) {
					me._vr_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._vr_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._vr_btn.onclick=function (e) {
			player.enterVR();
		}
		me._vr_btn.onmouseenter=function (e) {
			me._vr_btn__img.style.visibility='hidden';
			me._vr_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['vr_btn']=true;
		}
		me._vr_btn.onmouseleave=function (e) {
			me._vr_btn__img.style.visibility='inherit';
			me._vr_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['vr_btn']=false;
		}
		me._vr_btn.ggUpdatePosition=function (useTransition) {
		}
		me._menu_right_slider.appendChild(me._vr_btn);
		el=me._toggle_fullscreen=document.createElement('div');
		el.ggId="toggle_fullscreen";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._toggle_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle_fullscreen.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_auto_rot') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (
				((player.getHasSounds() == true))
			)
			{
				newConditionsTruePosition.push(3);
			}
			if (JSON.stringify(me._toggle_fullscreen.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._toggle_fullscreen.ggConditionsTruePosition = newConditionsTruePosition;
				me._toggle_fullscreen.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_fullscreen.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_fullscreen.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_fullscreen.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_fullscreen.ggConditionsTruePosition.includes(3)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._toggle_fullscreen.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._toggle_fullscreen.style.top=(16+deltaY) + 'px';
			}
		}
		me._toggle_fullscreen.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_fullscreen') == true)) && 
				((player.getVariableValue('has_fullscreen') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._toggle_fullscreen.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._toggle_fullscreen.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._toggle_fullscreen.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_fullscreen.ggCurrentLogicStateAlpha == 0) {
					me._toggle_fullscreen.style.visibility=me._toggle_fullscreen.ggVisible?'inherit':'hidden';
					me._toggle_fullscreen.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._toggle_fullscreen.style.opacity == 0.0) { me._toggle_fullscreen.style.visibility="hidden"; } }, 505);
					me._toggle_fullscreen.style.opacity=0;
				}
			}
		}
		me._toggle_fullscreen.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_right') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._toggle_fullscreen.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._toggle_fullscreen.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._toggle_fullscreen.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_fullscreen.ggCurrentLogicStateTabIndex == 0) {
					me._toggle_fullscreen.setAttribute('tabindex', '-1');
				}
				else {
					me._toggle_fullscreen.setAttribute('tabindex', '0');
				}
			}
		}
		me._toggle_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._toggle_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_off=document.createElement('div');
		els=me._fullscreen_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSI2LDIxIDE1LDIxIDE1LDMwICIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAsMTUgMjEsMTUgMjEsNiAiLz4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIyMSIgeDI9IjMxLjUiIHkxPSIxNSIgeTI9IjQuNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjQuNSIgeDI9IjE1'+
			'IiB5MT0iMzEuNSIgeTI9IjIxIi8+Cjwvc3ZnPgo=';
		me._fullscreen_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSI2LDIxIDE1LDIxIDE1LDMwICIvPgogPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMzAsMTUgMjEsMTUgMjEsNiAiLz4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIyMSIgeDI9IjMxLjUiIHkxPSIxNSIgeTI9IjQuNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjQuNSIgeDI9IjE1'+
			'IiB5MT0iMzEuNSIgeTI9IjIxIi8+Cjwvc3ZnPgo=';
		me._fullscreen_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_off.style.transition='';
				if (me._fullscreen_off.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_off.style.visibility=(Number(me._fullscreen_off.style.opacity)>0||!me._fullscreen_off.style.opacity)?'inherit':'hidden';
					me._fullscreen_off.ggVisible=true;
				}
				else {
					me._fullscreen_off.style.visibility="hidden";
					me._fullscreen_off.ggVisible=false;
				}
			}
		}
		me._fullscreen_off.onmouseenter=function (e) {
			me._fullscreen_off__img.style.visibility='hidden';
			me._fullscreen_off__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_off']=true;
		}
		me._fullscreen_off.onmouseleave=function (e) {
			me._fullscreen_off__img.style.visibility='inherit';
			me._fullscreen_off__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_off']=false;
		}
		me._fullscreen_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_fullscreen.appendChild(me._fullscreen_off);
		el=me._fullscreen_on=document.createElement('div');
		els=me._fullscreen_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIyMi41LDQuNSAzMS41LDQuNSAzMS41LDEzLjUgIi8+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIxMy41LDMxLjUgNC41LDMxLjUgNC41LDIyLjUgIi8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMzEuNSIgeDI9IjIxIiB5MT0iNC41IiB5Mj0iMTUiLz4KIDxsaW5lIGNsYXNz'+
			'PSJzdDAiIHgxPSI0LjUiIHgyPSIxNSIgeTE9IjMxLjUiIHkyPSIyMSIvPgo8L3N2Zz4K';
		me._fullscreen_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._fullscreen_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIyMi41LDQuNSAzMS41LDQuNSAzMS41LDEzLjUgIi8+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIxMy41LDMxLjUgNC41LDMxLjUgNC41LDIyLjUgIi8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMzEuNSIgeDI9IjIxIiB5MT0iNC41IiB5Mj0iMTUiLz4KIDxsaW5lIGNsYXNz'+
			'PSJzdDAiIHgxPSI0LjUiIHgyPSIxNSIgeTE9IjMxLjUiIHkyPSIyMSIvPgo8L3N2Zz4K';
		me._fullscreen_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="fullscreen on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fullscreen_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._fullscreen_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._fullscreen_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._fullscreen_on.style.transition='';
				if (me._fullscreen_on.ggCurrentLogicStateVisible == 0) {
					me._fullscreen_on.style.visibility="hidden";
					me._fullscreen_on.ggVisible=false;
				}
				else {
					me._fullscreen_on.style.visibility=(Number(me._fullscreen_on.style.opacity)>0||!me._fullscreen_on.style.opacity)?'inherit':'hidden';
					me._fullscreen_on.ggVisible=true;
				}
			}
		}
		me._fullscreen_on.onmouseenter=function (e) {
			me._fullscreen_on__img.style.visibility='hidden';
			me._fullscreen_on__imgo.style.visibility='inherit';
			me.elementMouseOver['fullscreen_on']=true;
		}
		me._fullscreen_on.onmouseleave=function (e) {
			me._fullscreen_on__img.style.visibility='inherit';
			me._fullscreen_on__imgo.style.visibility='hidden';
			me.elementMouseOver['fullscreen_on']=false;
		}
		me._fullscreen_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_fullscreen.appendChild(me._fullscreen_on);
		me._menu_right_slider.appendChild(me._toggle_fullscreen);
		el=me._toggle_audio=document.createElement('div');
		el.ggId="toggle_audio";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._toggle_audio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle_audio.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_auto_rot') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newConditionsTruePosition.push(2);
			}
			if (JSON.stringify(me._toggle_audio.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._toggle_audio.ggConditionsTruePosition = newConditionsTruePosition;
				me._toggle_audio.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_audio.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_audio.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_audio.ggConditionsTruePosition.includes(2)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._toggle_audio.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._toggle_audio.style.top=(16+deltaY) + 'px';
			}
		}
		me._toggle_audio.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._toggle_audio.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._toggle_audio.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._toggle_audio.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_audio.ggCurrentLogicStateAlpha == 0) {
					me._toggle_audio.style.visibility=me._toggle_audio.ggVisible?'inherit':'hidden';
					me._toggle_audio.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._toggle_audio.style.opacity == 0.0) { me._toggle_audio.style.visibility="hidden"; } }, 505);
					me._toggle_audio.style.opacity=0;
				}
			}
		}
		me._toggle_audio.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_right') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._toggle_audio.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._toggle_audio.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._toggle_audio.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_audio.ggCurrentLogicStateTabIndex == 0) {
					me._toggle_audio.setAttribute('tabindex', '-1');
				}
				else {
					me._toggle_audio.setAttribute('tabindex', '0');
				}
			}
		}
		me._toggle_audio.onclick=function (e) {
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
			player.toggleMuted("_all");
		}
		me._toggle_audio.ggUpdatePosition=function (useTransition) {
		}
		el=me._audio_off=document.createElement('div');
		els=me._audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE2LjUsNy41IDksMTMuNSAzLDEzLjUgMywyMi41IDksMjIuNSAxNi41LDI4LjUgIi8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMzQuNSIgeDI9IjI1LjUiIHkxPSIxMy41IiB5Mj0iMjIuNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjI1LjUiIHgyPSIzNC41IiB5MT0iMTMuNSIgeTI9'+
			'IjIyLjUiLz4KPC9zdmc+Cg==';
		me._audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE2LjUsNy41IDksMTMuNSAzLDEzLjUgMywyMi41IDksMjIuNSAxNi41LDI4LjUgIi8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMzQuNSIgeDI9IjI1LjUiIHkxPSIxMy41IiB5Mj0iMjIuNSIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjI1LjUiIHgyPSIzNC41IiB5MT0iMTMuNSIgeTI9'+
			'IjIyLjUiLz4KPC9zdmc+Cg==';
		me._audio_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_off.style.transition='';
				if (me._audio_off.ggCurrentLogicStateVisible == 0) {
					me._audio_off.style.visibility="hidden";
					me._audio_off.ggVisible=false;
				}
				else {
					me._audio_off.style.visibility=(Number(me._audio_off.style.opacity)>0||!me._audio_off.style.opacity)?'inherit':'hidden';
					me._audio_off.ggVisible=true;
				}
			}
		}
		me._audio_off.onmouseenter=function (e) {
			me._audio_off__img.style.visibility='hidden';
			me._audio_off__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_off']=true;
		}
		me._audio_off.onmouseleave=function (e) {
			me._audio_off__img.style.visibility='inherit';
			me._audio_off__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_off']=false;
		}
		me._audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_audio.appendChild(me._audio_off);
		el=me._audio_on=document.createElement('div');
		els=me._audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE2LjUsNy41IDksMTMuNSAzLDEzLjUgMywyMi41IDksMjIuNSAxNi41LDI4LjUgIi8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjguNiw3LjRjNS45LDUuOSw1LjksMTUuNCwwLDIxLjIgTTIzLjMsMTIuN2MyLjksMi45LDIuOSw3LjcsMCwxMC42Ii8+Cjwvc3ZnPgo=';
		me._audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._audio_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE2LjUsNy41IDksMTMuNSAzLDEzLjUgMywyMi41IDksMjIuNSAxNi41LDI4LjUgIi8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjguNiw3LjRjNS45LDUuOSw1LjksMTUuNCwwLDIxLjIgTTIzLjMsMTIuN2MyLjksMi45LDIuOSw3LjcsMCwxMC42Ii8+Cjwvc3ZnPgo=';
		me._audio_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="audio on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._audio_on.style.transition='';
				if (me._audio_on.ggCurrentLogicStateVisible == 0) {
					me._audio_on.style.visibility=(Number(me._audio_on.style.opacity)>0||!me._audio_on.style.opacity)?'inherit':'hidden';
					me._audio_on.ggVisible=true;
				}
				else {
					me._audio_on.style.visibility="hidden";
					me._audio_on.ggVisible=false;
				}
			}
		}
		me._audio_on.onmouseenter=function (e) {
			me._audio_on__img.style.visibility='hidden';
			me._audio_on__imgo.style.visibility='inherit';
			me.elementMouseOver['audio_on']=true;
		}
		me._audio_on.onmouseleave=function (e) {
			me._audio_on__img.style.visibility='inherit';
			me._audio_on__imgo.style.visibility='hidden';
			me.elementMouseOver['audio_on']=false;
		}
		me._audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_audio.appendChild(me._audio_on);
		me._menu_right_slider.appendChild(me._toggle_audio);
		el=me._toggle_hotspots=document.createElement('div');
		el.ggId="toggle_hotspots";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._toggle_hotspots.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle_hotspots.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (
				((player.getVariableValue('opt_auto_rot') == true))
			)
			{
				newConditionsTruePosition.push(1);
			}
			if (JSON.stringify(me._toggle_hotspots.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._toggle_hotspots.ggConditionsTruePosition = newConditionsTruePosition;
				me._toggle_hotspots.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_hotspots.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
				if (me._toggle_hotspots.ggConditionsTruePosition.includes(1)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._toggle_hotspots.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._toggle_hotspots.style.top=(16+deltaY) + 'px';
			}
		}
		me._toggle_hotspots.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getPointHotspotIds().length > 0))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._toggle_hotspots.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._toggle_hotspots.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._toggle_hotspots.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_hotspots.ggCurrentLogicStateAlpha == 0) {
					me._toggle_hotspots.style.visibility=me._toggle_hotspots.ggVisible?'inherit':'hidden';
					me._toggle_hotspots.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._toggle_hotspots.style.opacity == 0.0) { me._toggle_hotspots.style.visibility="hidden"; } }, 505);
					me._toggle_hotspots.style.opacity=0;
				}
			}
		}
		me._toggle_hotspots.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_right') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._toggle_hotspots.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._toggle_hotspots.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._toggle_hotspots.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._toggle_hotspots.ggCurrentLogicStateTabIndex == 0) {
					me._toggle_hotspots.setAttribute('tabindex', '-1');
				}
				else {
					me._toggle_hotspots.setAttribute('tabindex', '0');
				}
			}
		}
		me._toggle_hotspots.onclick=function (e) {
			player.setVariableValue('vis_hotspots', !player.getVariableValue('vis_hotspots'));
		}
		me._toggle_hotspots.ggUpdatePosition=function (useTransition) {
		}
		el=me._show_hotspots=document.createElement('div');
		els=me._show_hotspots__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMS41LDE4YzAsMCw2LTEyLDE2LjUtMTJzMTYuNSwxMiwxNi41LDEycy02LDEyLTE2LjUsMTJTMS41LDE4LDEuNSwxOHoiLz4KIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4IiBjeT0iMTgiIHI9IjQuNSIvPgo8L3N2Zz4K';
		me._show_hotspots__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._show_hotspots__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMS41LDE4YzAsMCw2LTEyLDE2LjUtMTJzMTYuNSwxMiwxNi41LDEycy02LDEyLTE2LjUsMTJTMS41LDE4LDEuNSwxOHoiLz4KIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4IiBjeT0iMTgiIHI9IjQuNSIvPgo8L3N2Zz4K';
		me._show_hotspots__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="show hotspots";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._show_hotspots.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._show_hotspots.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._show_hotspots.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._show_hotspots.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._show_hotspots.style.transition='';
				if (me._show_hotspots.ggCurrentLogicStateVisible == 0) {
					me._show_hotspots.style.visibility=(Number(me._show_hotspots.style.opacity)>0||!me._show_hotspots.style.opacity)?'inherit':'hidden';
					me._show_hotspots.ggVisible=true;
				}
				else {
					me._show_hotspots.style.visibility="hidden";
					me._show_hotspots.ggVisible=false;
				}
			}
		}
		me._show_hotspots.onmouseenter=function (e) {
			me._show_hotspots__img.style.visibility='hidden';
			me._show_hotspots__imgo.style.visibility='inherit';
			me.elementMouseOver['show_hotspots']=true;
		}
		me._show_hotspots.onmouseleave=function (e) {
			me._show_hotspots__img.style.visibility='inherit';
			me._show_hotspots__imgo.style.visibility='hidden';
			me.elementMouseOver['show_hotspots']=false;
		}
		me._show_hotspots.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_hotspots.appendChild(me._show_hotspots);
		el=me._hide_hotspots=document.createElement('div');
		els=me._hide_hotspots__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuOSwyNi45Yy0yLjYsMi01LjcsMy04LjksMy4xQzcuNSwzMCwxLjUsMTgsMS41LDE4YzEuOS0zLjUsNC41LTYuNSw3LjYtOC45IE0xNC44LDYuNEMxNS45LDYuMSwxNi45LDYsMTgsNiYjeGQ7JiN4YTsmI3g5O2MxMC41LDAsMTYuNSwxMiwxNi41LDEyYy0wLjksMS43LTIsMy4zLTMuMiw0LjggTTIx'+
			'LjIsMjEuMmMtMS43LDEuOC00LjUsMS45LTYuNCwwLjJzLTEuOS00LjUtMC4yLTYuNGMwLjEtMC4xLDAuMS0wLjIsMC4yLTAuMiIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEuNSIgeDI9IjM0LjUiIHkxPSIxLjUiIHkyPSIzNC41Ii8+Cjwvc3ZnPgo=';
		me._hide_hotspots__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hide_hotspots__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjYuOSwyNi45Yy0yLjYsMi01LjcsMy04LjksMy4xQzcuNSwzMCwxLjUsMTgsMS41LDE4YzEuOS0zLjUsNC41LTYuNSw3LjYtOC45IE0xNC44LDYuNEMxNS45LDYuMSwxNi45LDYsMTgsNiYjeGQ7JiN4YTsmI3g5O2MxMC41LDAsMTYuNSwxMiwxNi41LDEyYy0wLjksMS43LTIsMy4zLTMuMiw0LjggTTIx'+
			'LjIsMjEuMmMtMS43LDEuOC00LjUsMS45LTYuNCwwLjJzLTEuOS00LjUtMC4yLTYuNGMwLjEtMC4xLDAuMS0wLjIsMC4yLTAuMiIvPgogPGxpbmUgY2xhc3M9InN0MCIgeDE9IjEuNSIgeDI9IjM0LjUiIHkxPSIxLjUiIHkyPSIzNC41Ii8+Cjwvc3ZnPgo=';
		me._hide_hotspots__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hide hotspots";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hide_hotspots.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_hotspots.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_hotspots') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hide_hotspots.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hide_hotspots.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hide_hotspots.style.transition='';
				if (me._hide_hotspots.ggCurrentLogicStateVisible == 0) {
					me._hide_hotspots.style.visibility="hidden";
					me._hide_hotspots.ggVisible=false;
				}
				else {
					me._hide_hotspots.style.visibility=(Number(me._hide_hotspots.style.opacity)>0||!me._hide_hotspots.style.opacity)?'inherit':'hidden';
					me._hide_hotspots.ggVisible=true;
				}
			}
		}
		me._hide_hotspots.onmouseenter=function (e) {
			me._hide_hotspots__img.style.visibility='hidden';
			me._hide_hotspots__imgo.style.visibility='inherit';
			me.elementMouseOver['hide_hotspots']=true;
		}
		me._hide_hotspots.onmouseleave=function (e) {
			me._hide_hotspots__img.style.visibility='inherit';
			me._hide_hotspots__imgo.style.visibility='hidden';
			me.elementMouseOver['hide_hotspots']=false;
		}
		me._hide_hotspots.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_hotspots.appendChild(me._hide_hotspots);
		me._menu_right_slider.appendChild(me._toggle_hotspots);
		el=me._toggle_autorotate=document.createElement('div');
		el.ggId="toggle_autorotate";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_autorotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._toggle_autorotate.logicBlock_position = function() {
			var newConditionsTruePosition = [];
			var deltaX = 0;
			var deltaY = 0;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newConditionsTruePosition.push(0);
			}
			if (JSON.stringify(me._toggle_autorotate.ggConditionsTruePosition) != JSON.stringify(newConditionsTruePosition)) {
				me._toggle_autorotate.ggConditionsTruePosition = newConditionsTruePosition;
				me._toggle_autorotate.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._toggle_autorotate.ggConditionsTruePosition.includes(0)) {
					deltaX += 0;
					deltaY += 45;
				}
					me._toggle_autorotate.style.left = 'calc(50% - (36px / 2) - (0px / 2) + ' + (0+deltaX) + 'px)';
					me._toggle_autorotate.style.top=(16+deltaY) + 'px';
			}
		}
		me._toggle_autorotate.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('opt_auto_rot') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._toggle_autorotate.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._toggle_autorotate.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._toggle_autorotate.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._toggle_autorotate.ggCurrentLogicStateAlpha == 0) {
					me._toggle_autorotate.style.visibility=me._toggle_autorotate.ggVisible?'inherit':'hidden';
					me._toggle_autorotate.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._toggle_autorotate.style.opacity == 0.0) { me._toggle_autorotate.style.visibility="hidden"; } }, 505);
					me._toggle_autorotate.style.opacity=0;
				}
			}
		}
		me._toggle_autorotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._autorotate_on=document.createElement('div');
		els=me._autorotate_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIzNC41LDYgMzQuNSwxNSAyNS41LDE1ICIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjcsMjIuNWMtMi41LDctMTAuMiwxMC43LTE3LjIsOC4yUzIuOCwyMC41LDUuMywxMy41UzE1LjUsMi44LDIyLjUsNS4zYzEuOSwwLjcsMy42LDEuOCw1LjEsMy4ybDYuOSw2LjUiLz4KPC9zdmc+'+
			'Cg==';
		me._autorotate_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIzNC41LDYgMzQuNSwxNSAyNS41LDE1ICIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMwLjcsMjIuNWMtMi41LDctMTAuMiwxMC43LTE3LjIsOC4yUzIuOCwyMC41LDUuMywxMy41UzE1LjUsMi44LDIyLjUsNS4zYzEuOSwwLjcsMy42LDEuOCw1LjEsMy4ybDYuOSw2LjUiLz4KPC9zdmc+'+
			'Cg==';
		me._autorotate_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="autorotate on";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._autorotate_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._autorotate_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_on.style.transition='';
				if (me._autorotate_on.ggCurrentLogicStateVisible == 0) {
					me._autorotate_on.style.visibility="hidden";
					me._autorotate_on.ggVisible=false;
				}
				else {
					me._autorotate_on.style.visibility=(Number(me._autorotate_on.style.opacity)>0||!me._autorotate_on.style.opacity)?'inherit':'hidden';
					me._autorotate_on.ggVisible=true;
				}
			}
		}
		me._autorotate_on.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_right') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._autorotate_on.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._autorotate_on.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._autorotate_on.style.transition='';
				if (me._autorotate_on.ggCurrentLogicStateTabIndex == 0) {
					me._autorotate_on.setAttribute('tabindex', '-1');
				}
				else {
					me._autorotate_on.setAttribute('tabindex', '0');
				}
			}
		}
		me._autorotate_on.onclick=function (e) {
			player.startAutorotate(0.05);
		}
		me._autorotate_on.onmouseenter=function (e) {
			me._autorotate_on__img.style.visibility='hidden';
			me._autorotate_on__imgo.style.visibility='inherit';
			me.elementMouseOver['autorotate_on']=true;
		}
		me._autorotate_on.onmouseleave=function (e) {
			me._autorotate_on__img.style.visibility='inherit';
			me._autorotate_on__imgo.style.visibility='hidden';
			me.elementMouseOver['autorotate_on']=false;
		}
		me._autorotate_on.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_autorotate.appendChild(me._autorotate_on);
		el=me._autorotate_off=document.createElement('div');
		els=me._autorotate_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiM0ZmI1YzI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8xXzFfIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIzNC41LDYgMzQuNSwxNSAyNS41LDE1ICAiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuNyw1LjJjMi45LTEsNi0xLDguOCwwLjFjMS45LDAuNywzLjYsMS44LDUuMSwzLjJsNi45LDYuNSIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNy41LDI3LjVjLTQu'+
			'OSw1LjYtMTMuNCw2LjEtMTksMS4ycy02LjEtMTMuNC0xLjItMTljMC40LTAuNCwwLjctMC44LDEuMi0xLjIiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yX2NvcHkiPgogIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjEuNSwxLjUgOC41LDguNSAyNy41LDI3LjUgMzQuNSwzNC41ICAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._autorotate_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8xXzFfIj4KICA8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSIzNC41LDYgMzQuNSwxNSAyNS41LDE1ICAiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuNyw1LjJjMi45LTEsNi0xLDguOCwwLjFjMS45LDAuNywzLjYsMS44LDUuMSwzLjJsNi45LDYuNSIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNy41LDI3LjVjLTQu'+
			'OSw1LjYtMTMuNCw2LjEtMTksMS4ycy02LjEtMTMuNC0xLjItMTljMC40LTAuNCwwLjctMC44LDEuMi0xLjIiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yX2NvcHkiPgogIDxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjEuNSwxLjUgOC41LDguNSAyNy41LDI3LjUgMzQuNSwzNC41ICAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._autorotate_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="autorotate off";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._autorotate_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._autorotate_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._autorotate_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._autorotate_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._autorotate_off.style.transition='';
				if (me._autorotate_off.ggCurrentLogicStateVisible == 0) {
					me._autorotate_off.style.visibility=(Number(me._autorotate_off.style.opacity)>0||!me._autorotate_off.style.opacity)?'inherit':'hidden';
					me._autorotate_off.ggVisible=true;
				}
				else {
					me._autorotate_off.style.visibility="hidden";
					me._autorotate_off.ggVisible=false;
				}
			}
		}
		me._autorotate_off.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('vis_menu_right') == false)) || 
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._autorotate_off.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._autorotate_off.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._autorotate_off.style.transition='';
				if (me._autorotate_off.ggCurrentLogicStateTabIndex == 0) {
					me._autorotate_off.setAttribute('tabindex', '-1');
				}
				else {
					me._autorotate_off.setAttribute('tabindex', '0');
				}
			}
		}
		me._autorotate_off.onclick=function (e) {
			player.stopAutorotate();
		}
		me._autorotate_off.onmouseenter=function (e) {
			me._autorotate_off__img.style.visibility='hidden';
			me._autorotate_off__imgo.style.visibility='inherit';
			me.elementMouseOver['autorotate_off']=true;
		}
		me._autorotate_off.onmouseleave=function (e) {
			me._autorotate_off__img.style.visibility='inherit';
			me._autorotate_off__imgo.style.visibility='hidden';
			me.elementMouseOver['autorotate_off']=false;
		}
		me._autorotate_off.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_autorotate.appendChild(me._autorotate_off);
		me._menu_right_slider.appendChild(me._toggle_autorotate);
		el=me._languages_btn=document.createElement('div');
		els=me._languages_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8ZyBpZD0iTGF5ZXJfMV8wMDAwMDAwOTU1MzU2OTQ2NDI2OTY1MjEzMDAwMDAwMjEwNzE1MzEyNzMyMjYzNzIzOV8iPgogIDxwYXRoIGQ9IiAgIE0zNC45LDE4YzAsOS4yLTcuNSwxNi43LTE2LjcsMTYuN0gxLjVsNC45LTQuOWMtMy0zLTQuOS03LjItNC45LTExLjhDMS42LDguOCw5LDEuMywxOC4yLDEuM1MzNC45LDguOCwzNC45LDE4eiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8'+
			'L2c+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iOC40IiB4Mj0iMTcuNiIgeTE9IjExLjMiIHkyPSIxMS4zIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3'+
			'BhY2l0eToxIiB4MT0iMTMiIHgyPSIxMyIgeTE9IjguMyIgeTI9IjExLjMiLz4KICA8cGF0aCBkPSIgICBNOS40LDIwLjRjMy43LTIuMSw2LTUuMSw3LjMtOS4xIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGZiNWMyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cGF0aCBkPSIgICBNMTAuOSwxNC43YzEuNiwyLjcsMy42LDQuMyw1LjgsNS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNGZiNWMyO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1s'+
			'aW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIgICAxNy44LDI2LjYgMjIuNCwxNS45IDI3LDI2LjYgICIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZW'+
			'NhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iMTguNiIgeDI9IjI2LjIiIHkxPSIyNC43IiB5Mj0iMjQuNyIvPgogPC9nPgo8L3N2Zz4K';
		me._languages_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._languages_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8ZyBpZD0iTGF5ZXJfMV8wMDAwMDAwOTU1MzU2OTQ2NDI2OTY1MjEzMDAwMDAwMjEwNzE1MzEyNzMyMjYzNzIzOV8iPgogIDxwYXRoIGQ9IiAgIE0zNC45LDE4YzAsOS4yLTcuNSwxNi43LTE2LjcsMTYuN0gxLjVsNC45LTQuOWMtMy0zLTQuOS03LjItNC45LTExLjhDMS42LDguOCw5LDEuMywxOC4yLDEuM1MzNC45LDguOCwzNC45LDE4eiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8'+
			'L2c+CiA8ZyBpZD0iRWJlbmVfMSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iOC40IiB4Mj0iMTcuNiIgeTE9IjExLjMiIHkyPSIxMS4zIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3'+
			'BhY2l0eToxIiB4MT0iMTMiIHgyPSIxMyIgeTE9IjguMyIgeTI9IjExLjMiLz4KICA8cGF0aCBkPSIgICBNOS40LDIwLjRjMy43LTIuMSw2LTUuMSw3LjMtOS4xIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cGF0aCBkPSIgICBNMTAuOSwxNC43YzEuNiwyLjcsMy42LDQuMyw1LjgsNS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoxLjI1O3N0cm9rZS1s'+
			'aW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDs7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIgICAxNy44LDI2LjYgMjIuNCwxNS45IDI3LDI2LjYgICIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZW'+
			'NhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7OyBzdHJva2Utb3BhY2l0eToxIiB4MT0iMTguNiIgeDI9IjI2LjIiIHkxPSIyNC43IiB5Mj0iMjQuNyIvPgogPC9nPgo8L3N2Zz4K';
		me._languages_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="languages_btn";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_btn.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getProjectTranslations().length > 1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._languages_btn.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._languages_btn.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._languages_btn.style.transition='opacity 500ms ease 0ms';
				if (me._languages_btn.ggCurrentLogicStateAlpha == 0) {
					me._languages_btn.style.visibility=me._languages_btn.ggVisible?'inherit':'hidden';
					me._languages_btn.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._languages_btn.style.opacity == 0.0) { me._languages_btn.style.visibility="hidden"; } }, 505);
					me._languages_btn.style.opacity=0;
				}
			}
		}
		me._languages_btn.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_languages', !player.getVariableValue('vis_languages'));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_languages', !player.getVariableValue('vis_phone_languages'));
			}
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_share', false);
			player.setVariableValue('vis_url_popup', false);
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_image_popup', false);
			player.setVariableValue('vis_pdf_popup', false);
			player.setVariableValue('vis_video_popup', false);
		}
		me._languages_btn.onmouseenter=function (e) {
			me._languages_btn__img.style.visibility='hidden';
			me._languages_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['languages_btn']=true;
		}
		me._languages_btn.onmouseleave=function (e) {
			me._languages_btn__img.style.visibility='inherit';
			me._languages_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['languages_btn']=false;
		}
		me._languages_btn.ggUpdatePosition=function (useTransition) {
		}
		me._menu_right_slider.appendChild(me._languages_btn);
		me._menu_right_container.appendChild(me._menu_right_slider);
		me._menu_right.appendChild(me._menu_right_container);
		el=me._menu_right_icon_bg=document.createElement('div');
		el.ggId="menu_right_icon_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle gradient";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 25px;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._menu_right_icon_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_right_icon_bg.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._menu_right_icon_bg.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._menu_right_icon_bg.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._menu_right_icon_bg.style.transition='';
				if (me._menu_right_icon_bg.ggCurrentLogicStateTabIndex == 0) {
					me._menu_right_icon_bg.setAttribute('tabindex', '-1');
				}
				else {
					me._menu_right_icon_bg.setAttribute('tabindex', '0');
				}
			}
		}
		me._menu_right_icon_bg.onclick=function (e) {
			player.setVariableValue('vis_menu_right', !player.getVariableValue('vis_menu_right'));
		}
		me._menu_right_icon_bg.onmouseenter=function (e) {
			me.elementMouseOver['menu_right_icon_bg']=true;
			me._menu_right_icon.logicBlock_visible();
			me._menu_right_icon_active.logicBlock_visible();
		}
		me._menu_right_icon_bg.onmouseleave=function (e) {
			me.elementMouseOver['menu_right_icon_bg']=false;
			me._menu_right_icon.logicBlock_visible();
			me._menu_right_icon_active.logicBlock_visible();
		}
		me._menu_right_icon_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._menu_right_icon=document.createElement('div');
		els=me._menu_right_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iNSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMyLjMsMjVjLTAuNSwxLTAuMiwyLjIsMC41LDNsMC4xLDAuMWMxLjMsMS4zLDEuMywzLjQsMCw0LjdjMCwwLDAsMCwwLDBjLTEuMywxLjMtMy40LDEuMy00LjcsMGMwLDAsMCww'+
			'LDAsMCYjeGQ7JiN4YTsmI3g5O2wtMC4xLTAuMWMtMC44LTAuOC0yLTEtMy0wLjZjLTEsMC40LTEuNywxLjQtMS43LDIuNVYzNWMwLDEuOC0xLjUsMy4zLTMuMywzLjNjLTEuOCwwLTMuMy0xLjUtMy4zLTMuM3YtMC4yYzAtMS4xLTAuNy0yLjEtMS44LTIuNSYjeGQ7JiN4YTsmI3g5O2MtMS0wLjUtMi4yLTAuMi0zLDAuNUwxMS45LDMzYy0xLjMsMS4zLTMuNCwxLjMtNC43LDBjMCwwLDAsMCwwLDBjLTEuMy0xLjMtMS4zLTMuNCwwLTQuN2MwLDAsMCwwLDAsMGwwLjEtMC4xYzAuOC0wLjgsMS0yLDAuNi0zJiN4ZDsmI3hhOyYjeDk7Yy0wLjQtMS0xLjQtMS43LTIuNS0xLjdINWMtMS44LDAtMy4zLT'+
			'EuNS0zLjMtMy4zYzAtMS44LDEuNS0zLjMsMy4zLTMuM2gwLjFjMS4xLDAsMi4xLTAuNywyLjUtMS44YzAuNS0xLDAuMi0yLjItMC42LTNMNywxMS45JiN4ZDsmI3hhOyYjeDk7Yy0xLjMtMS4zLTEuMy0zLjQsMC00LjdjMCwwLDAsMCwwLDBjMS4zLTEuMywzLjQtMS4zLDQuNywwYzAsMCwwLDAsMCwwbDAuMSwwLjFjMC44LDAuOCwyLDEsMywwLjZIMTVjMS0wLjQsMS43LTEuNCwxLjctMi41VjUmI3hkOyYjeGE7JiN4OTtjMC0xLjgsMS41LTMuMywzLjMtMy4zYzEuOCwwLDMuMywxLjUsMy4zLDMuM3YwLjFjMCwxLjEsMC43LDIuMSwxLjcsMi41YzEsMC41LDIuMiwwLjIsMy0wLjZMMjguMSw3YzEu'+
			'My0xLjMsMy40LTEuMyw0LjcsMCYjeGQ7JiN4YTsmI3g5O2MwLDAsMCwwLDAsMGMxLjMsMS4zLDEuMywzLjQsMCw0LjdjMCwwLDAsMCwwLDBsLTAuMSwwLjFjLTAuOCwwLjgtMSwyLTAuNiwzVjE1YzAuNCwxLDEuNCwxLjcsMi41LDEuN0gzNWMxLjgsMCwzLjMsMS41LDMuMywzLjMmI3hkOyYjeGE7JiN4OTtjMCwxLjgtMS41LDMuMy0zLjMsMy4zaC0wLjJDMzMuOCwyMy4zLDMyLjgsMjQsMzIuMywyNXoiLz4KPC9zdmc+Cg==';
		me._menu_right_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_right_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_right_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_right_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_right_icon_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_right_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_right_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_right_icon.style.transition='';
				if (me._menu_right_icon.ggCurrentLogicStateVisible == 0) {
					me._menu_right_icon.style.visibility="hidden";
					me._menu_right_icon.ggVisible=false;
				}
				else {
					me._menu_right_icon.style.visibility=(Number(me._menu_right_icon.style.opacity)>0||!me._menu_right_icon.style.opacity)?'inherit':'hidden';
					me._menu_right_icon.ggVisible=true;
				}
			}
		}
		me._menu_right_icon.ggUpdatePosition=function (useTransition) {
		}
		me._menu_right_icon_bg.appendChild(me._menu_right_icon);
		el=me._menu_right_icon_active=document.createElement('div');
		els=me._menu_right_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MCA0MDsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQwIDQwIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6Ni42NjY3O30mI3hkOwo8L3N0eWxlPgogPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMjAiIGN5PSIyMCIgcj0iNSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTMyLjMsMjVjLTAuNSwxLTAuMiwyLjIsMC41LDNsMC4xLDAuMWMxLjMsMS4zLDEuMywzLjQsMCw0LjdjMCwwLDAsMCwwLDBjLTEuMywxLjMtMy40LDEuMy00LjcsMGMwLDAsMCww'+
			'LDAsMCYjeGQ7JiN4YTsmI3g5O2wtMC4xLTAuMWMtMC44LTAuOC0yLTEtMy0wLjZjLTEsMC40LTEuNywxLjQtMS43LDIuNVYzNWMwLDEuOC0xLjUsMy4zLTMuMywzLjNjLTEuOCwwLTMuMy0xLjUtMy4zLTMuM3YtMC4yYzAtMS4xLTAuNy0yLjEtMS44LTIuNSYjeGQ7JiN4YTsmI3g5O2MtMS0wLjUtMi4yLTAuMi0zLDAuNUwxMS45LDMzYy0xLjMsMS4zLTMuNCwxLjMtNC43LDBjMCwwLDAsMCwwLDBjLTEuMy0xLjMtMS4zLTMuNCwwLTQuN2MwLDAsMCwwLDAsMGwwLjEtMC4xYzAuOC0wLjgsMS0yLDAuNi0zJiN4ZDsmI3hhOyYjeDk7Yy0wLjQtMS0xLjQtMS43LTIuNS0xLjdINWMtMS44LDAtMy4zLT'+
			'EuNS0zLjMtMy4zYzAtMS44LDEuNS0zLjMsMy4zLTMuM2gwLjFjMS4xLDAsMi4xLTAuNywyLjUtMS44YzAuNS0xLDAuMi0yLjItMC42LTNMNywxMS45JiN4ZDsmI3hhOyYjeDk7Yy0xLjMtMS4zLTEuMy0zLjQsMC00LjdjMCwwLDAsMCwwLDBjMS4zLTEuMywzLjQtMS4zLDQuNywwYzAsMCwwLDAsMCwwbDAuMSwwLjFjMC44LDAuOCwyLDEsMywwLjZIMTVjMS0wLjQsMS43LTEuNCwxLjctMi41VjUmI3hkOyYjeGE7JiN4OTtjMC0xLjgsMS41LTMuMywzLjMtMy4zYzEuOCwwLDMuMywxLjUsMy4zLDMuM3YwLjFjMCwxLjEsMC43LDIuMSwxLjcsMi41YzEsMC41LDIuMiwwLjIsMy0wLjZMMjguMSw3YzEu'+
			'My0xLjMsMy40LTEuMyw0LjcsMCYjeGQ7JiN4YTsmI3g5O2MwLDAsMCwwLDAsMGMxLjMsMS4zLDEuMywzLjQsMCw0LjdjMCwwLDAsMCwwLDBsLTAuMSwwLjFjLTAuOCwwLjgtMSwyLTAuNiwzVjE1YzAuNCwxLDEuNCwxLjcsMi41LDEuN0gzNWMxLjgsMCwzLjMsMS41LDMuMywzLjMmI3hkOyYjeGE7JiN4OTtjMCwxLjgtMS41LDMuMy0zLjMsMy4zaC0wLjJDMzMuOCwyMy4zLDMyLjgsMjQsMzIuMywyNXoiLz4KPC9zdmc+Cg==';
		me._menu_right_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_right_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._menu_right_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_right_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['menu_right_icon_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._menu_right_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._menu_right_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._menu_right_icon_active.style.transition='';
				if (me._menu_right_icon_active.ggCurrentLogicStateVisible == 0) {
					me._menu_right_icon_active.style.visibility=(Number(me._menu_right_icon_active.style.opacity)>0||!me._menu_right_icon_active.style.opacity)?'inherit':'hidden';
					me._menu_right_icon_active.ggVisible=true;
				}
				else {
					me._menu_right_icon_active.style.visibility="hidden";
					me._menu_right_icon_active.ggVisible=false;
				}
			}
		}
		me._menu_right_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._menu_right_icon_bg.appendChild(me._menu_right_icon_active);
		me._menu_right.appendChild(me._menu_right_icon_bg);
		me._safe_area_main.appendChild(me._menu_right);
		me.divSkin.appendChild(me._safe_area_main);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 320px);';
		hs+='left : calc(50% - ((calc(100% - 500px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 500px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu_center') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map.ggCurrentLogicStateSize = newLogicStateSize;
				me._map.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._map.ggCurrentLogicStateSize == 0) {
					me._map.style.width='calc(100% - 500px)';
					me._map.style.height='calc(100% - 380px)';
					me._map.style.left = 'calc(50% - (calc(100% - 500px) / 2))';
					setTimeout(function() {skin.updateSize(me._map);}, 850);
				}
				else {
					me._map.style.width='calc(100% - 500px)';
					me._map.style.height='calc(100% - 320px)';
					me._map.style.left = 'calc(50% - (calc(100% - 500px) / 2))';
					setTimeout(function() {skin.updateSize(me._map);}, 850);
				}
			}
		}
		me._map.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._map.ggCurrentLogicStateAlpha == 0) {
					me._map.style.visibility=me._map.ggVisible?'inherit':'hidden';
					me._map.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map.style.opacity == 0.0) { me._map.style.visibility="hidden"; } }, 505);
					me._map.style.opacity=0;
				}
			}
		}
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_bg=document.createElement('div');
		el.ggId="map_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_bg.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_bg);
		el=me._map_el=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(30% + 50px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : calc(70% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_el.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_el.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_el.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._map_el.ggCurrentLogicStatePosition == 0) {
					me._map_el.style.left='30px';
					me._map_el.style.top='70px';
				}
				else {
					me._map_el.style.left='calc(30% + 50px)';
					me._map_el.style.top='70px';
				}
			}
		}
		me._map_el.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_el.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_el.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._map_el.ggCurrentLogicStateSize == 0) {
					me._map_el.style.width='calc(100% - 60px)';
					me._map_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._map_el);
				}
				else {
					me._map_el.style.width='calc(70% - 80px)';
					me._map_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._map_el);
				}
			}
		}
		me._map_el.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._map_el.ggCurrentLogicStateVisible == 0) {
					me._map_el.style.visibility=(Number(me._map_el.style.opacity)>0||!me._map_el.style.opacity)?'inherit':'hidden';
					if (me._map_el.ggMapNotLoaded && me._map_el.ggInitMap) {
						me._map_el.ggInitMap(false);
						me._map_el.ggInitMapMarkers(true);
					}
					me._map_el.ggVisible=true;
				}
				else {
					me._map_el.style.visibility="hidden";
					if (me._map_el.ggClearMap) me._map_el.ggClearMap();
					me._map_el.ggVisible=false;
				}
			}
		}
		me._map_el.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_el);
		el=me._floorplan_el=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_el";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		el.userData=el;
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(30% + 50px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : hidden;';
		hs+='width : calc(70% - 80px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floorplan_el.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._floorplan_el.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStatePosition == 0) {
					me._floorplan_el.style.left='30px';
					me._floorplan_el.style.top='70px';
				}
				else {
					me._floorplan_el.style.left='calc(30% + 50px)';
					me._floorplan_el.style.top='70px';
				}
			}
		}
		me._floorplan_el.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStateSize != newLogicStateSize) {
				me._floorplan_el.ggCurrentLogicStateSize = newLogicStateSize;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStateSize == 0) {
					me._floorplan_el.style.width='calc(100% - 60px)';
					me._floorplan_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._floorplan_el);
				}
				else {
					me._floorplan_el.style.width='calc(70% - 80px)';
					me._floorplan_el.style.height='calc(100% - 100px)';
					skin.updateSize(me._floorplan_el);
				}
			}
		}
		me._floorplan_el.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._floorplan_el.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el.style.visibility=(Number(me._floorplan_el.style.opacity)>0||!me._floorplan_el.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el.ggMapNotLoaded && me._floorplan_el.ggInitMap) {
						me._floorplan_el.ggInitMap(false);
						me._floorplan_el.ggInitMapMarkers(true);
					}
					me._floorplan_el.ggVisible=true;
				}
				else {
					me._floorplan_el.style.visibility="hidden";
					if (me._floorplan_el.ggClearMap) me._floorplan_el.ggClearMap();
					me._floorplan_el.ggVisible=false;
				}
			}
		}
		me._floorplan_el.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._floorplan_el);
		el=me._map_node_description=document.createElement('div');
		els=me._map_node_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 90px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : calc(30% - 25px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='line-height: 1.5;';
		els.setAttribute('style',hs);
		me._map_node_description.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_description.ggUpdateText();
		el.appendChild(els);
		me._map_node_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_node_description.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_desc_in_maps') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_node_description.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_node_description.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_node_description.style.transition='';
				if (me._map_node_description.ggCurrentLogicStateVisible == 0) {
					me._map_node_description.style.visibility="hidden";
					me._map_node_description.ggVisible=false;
				}
				else {
					me._map_node_description.style.visibility=(Number(me._map_node_description.style.opacity)>0||!me._map_node_description.style.opacity)?'inherit':'hidden';
					me._map_node_description.ggVisible=true;
				}
			}
		}
		me._map_node_description.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_node_description);
		el=me._map_node_title=document.createElement('div');
		els=me._map_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 70px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._map_node_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_node_title.ggUpdateText();
		el.appendChild(els);
		me._map_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_node_title);
		el=me._map_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="map_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_top.onclick=function (e) {
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_map', false);
		}
		me._map_top.onmouseenter=function (e) {
			me.elementMouseOver['map_top']=true;
			me._map_close_btn.logicBlock_visible();
			me._map_close_btn_active.logicBlock_visible();
		}
		me._map_top.onmouseleave=function (e) {
			me.elementMouseOver['map_top']=false;
			me._map_close_btn.logicBlock_visible();
			me._map_close_btn_active.logicBlock_visible();
		}
		me._map_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_close_btn=document.createElement('div');
		els=me._map_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._map_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._map_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_close_btn.style.transition='';
				if (me._map_close_btn.ggCurrentLogicStateVisible == 0) {
					me._map_close_btn.style.visibility="hidden";
					me._map_close_btn.ggVisible=false;
				}
				else {
					me._map_close_btn.style.visibility=(Number(me._map_close_btn.style.opacity)>0||!me._map_close_btn.style.opacity)?'inherit':'hidden';
					me._map_close_btn.ggVisible=true;
				}
			}
		}
		me._map_close_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._map_close_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._map_close_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._map_close_btn.style.transition='';
				if (me._map_close_btn.ggCurrentLogicStateTabIndex == 0) {
					me._map_close_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._map_close_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._map_close_btn.onclick=function (e) {
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_map', false);
		}
		me._map_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._map_top.appendChild(me._map_close_btn);
		el=me._map_close_btn_active=document.createElement('div');
		els=me._map_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._map_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._map_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_close_btn_active.style.transition='';
				if (me._map_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._map_close_btn_active.style.visibility=(Number(me._map_close_btn_active.style.opacity)>0||!me._map_close_btn_active.style.opacity)?'inherit':'hidden';
					me._map_close_btn_active.ggVisible=true;
				}
				else {
					me._map_close_btn_active.style.visibility="hidden";
					me._map_close_btn_active.ggVisible=false;
				}
			}
		}
		me._map_close_btn_active.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._map_close_btn_active.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._map_close_btn_active.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._map_close_btn_active.style.transition='';
				if (me._map_close_btn_active.ggCurrentLogicStateTabIndex == 0) {
					me._map_close_btn_active.setAttribute('tabindex', '-1');
				}
				else {
					me._map_close_btn_active.setAttribute('tabindex', '0');
				}
			}
		}
		me._map_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_top.appendChild(me._map_close_btn_active);
		me._map.appendChild(me._map_top);
		el=me._reset_info=document.createElement('div');
		el.ggId="reset info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._reset_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._reset_info.onclick=function (e) {
				me._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_title.ggUpdateText();
			me._map_node_title.ggTextDiv.scrollTop = 0;
				me._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._map_node_description.ggUpdateText();
			me._map_node_description.ggTextDiv.scrollTop = 0;
		}
		me._reset_info.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._reset_info);
		me.divSkin.appendChild(me._map);
		el=me._languages=document.createElement('div');
		el.ggId="languages";
		el.ggDx=0;
		el.ggDy=-80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 0px) / 2) - 80px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_phone_languages') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._languages.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._languages.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._languages.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._languages.ggCurrentLogicStatePosition == 0) {
					me._languages.style.left = 'calc(50% - (300px / 2))';
					me._languages.style.top = 'calc(50% - (180px / 2))';
				}
				else {
					me._languages.style.left='calc(50% - ((300px + 0px) / 2) + 0px)';
					me._languages.style.top='calc(50% - ((180px + 0px) / 2) - 80px)';
				}
			}
		}
		me._languages.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_languages') == true)) || 
				((player.getVariableValue('vis_phone_languages') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._languages.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._languages.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._languages.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._languages.ggCurrentLogicStateAlpha == 0) {
					me._languages.style.visibility=me._languages.ggVisible?'inherit':'hidden';
					me._languages.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._languages.style.opacity == 0.0) { me._languages.style.visibility="hidden"; } }, 505);
					me._languages.style.opacity=0;
				}
			}
		}
		me._languages.ggUpdatePosition=function (useTransition) {
		}
		el=me._languages_bg=document.createElement('div');
		el.ggId="languages_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_bg.ggUpdatePosition=function (useTransition) {
		}
		me._languages.appendChild(me._languages_bg);
		el=me._languages_scroller=document.createElement('div');
		els=me._languages_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 21px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 124px;';
		hs+="";
		els.setAttribute('style',hs);
		me._languages_scroller.ggScrollByX = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosX = (me._languages_scroller__horScrollFg.offsetLeft + diffX);
			me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
			me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
		}
		me._languages_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._languages_scroller.ggHorScrollVisible || diffX == 0 || me._languages_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._languages_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._languages_scroller.ggScrollPosX >= me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth)) {
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._languages_scroller.ggScrollPosX <= 0)) {
					me._languages_scroller.ggScrollPosX = Math.max(me._languages_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
			me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentLeftOffset + 'px';
			me._languages_scroller.ggScrollPosXPercent = (me._languages_scroller__horScrollFg.offsetLeft / me._languages_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._languages_scroller.ggScrollByY = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			me._languages_scroller.ggScrollPosY = (me._languages_scroller__vertScrollFg.offsetTop + diffY);
			me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
			me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
		}
		me._languages_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._languages_scroller.ggVertScrollVisible || diffY == 0 || me._languages_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._languages_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._languages_scroller.ggScrollPosY >= me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight)) {
					me._languages_scroller.ggScrollPosY = Math.min(me._languages_scroller.ggScrollPosY, me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._languages_scroller.ggScrollPosY <= 0)) {
					me._languages_scroller.ggScrollPosY = Math.max(me._languages_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._languages_scroller__vertScrollFg.style.top = me._languages_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._languages_scroller.ggScrollPosY / (me._languages_scroller__vertScrollBg.offsetHeight - me._languages_scroller__vertScrollFg.offsetHeight);
			me._languages_scroller__content.style.top = -(Math.round((me._languages_scroller.ggContentHeight * (1.0 - me._languages_scroller.ggVPercentVisible)) * percentScrolled)) + me._languages_scroller.ggContentTopOffset + 'px';
			me._languages_scroller.ggScrollPosYPercent = (me._languages_scroller__vertScrollFg.offsetTop / me._languages_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._languages_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._languages_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._languages_scroller.clientWidth - (me._languages_scroller.ggVertScrollVisible ? 5 : 0))) * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._languages_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._languages_scroller.clientHeight - (me._languages_scroller.ggHorScrollVisible ? 5 : 0))) * me._languages_scroller.ggVPercentVisible);
					me._languages_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._languages_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._languages_scroller.ggDragInertiaX *= 0.96;
				me._languages_scroller.ggDragInertiaY *= 0.96;
				me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
				me._languages_scroller.ggScrollByY(me._languages_scroller.ggDragInertiaY);
				if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._languages_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._languages_scroller.ggInInteraction = false;
			setTimeout(function() { me._languages_scroller.ggIsDragging = false; }, 100);
		}
		me._languages_scroller__content.mousetouchmove = e => {
			if (!me._languages_scroller.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._languages_scroller__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._languages_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._languages_scroller.ggDragStartY) > 10) me._languages_scroller.ggIsDragging = true;
			var diffX = (eventX - me._languages_scroller.ggDragLastX) * me._languages_scroller.ggHPercentVisible;
			var diffY = (eventY - me._languages_scroller.ggDragLastY) * me._languages_scroller.ggVPercentVisible;
			me._languages_scroller.ggDragInertiaX = -diffX;
			me._languages_scroller.ggDragInertiaY = -diffY;
			me._languages_scroller.ggDragLastX = eventX;
			me._languages_scroller.ggDragLastY = eventY;
			me._languages_scroller.ggScrollByX(-diffX);
			me._languages_scroller.ggScrollByY(-diffY);
		}
		me._languages_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._languages_scroller.ggDragLastX = me._languages_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._languages_scroller.ggDragLastY = me._languages_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._languages_scroller.ggInInteraction = true;
		}
		els.onmousedown = me._languages_scroller__content.mousetouchstart;
		els.ontouchstart = me._languages_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._languages_scroller__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._languages_scroller.contentMouseupListener = function() { me._languages_scroller__content.mousetouchend(); });
		document.addEventListener('touchend', me._languages_scroller.contentTouchendListener = function() { me._languages_scroller__content.mousetouchend(); });
		document.addEventListener('mousemove', me._languages_scroller.contentMousemoveListener = function() { me._languages_scroller__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._languages_scroller.contentTouchmoveListener = function() { me._languages_scroller__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._languages_scroller.pointerupListener = function() { me._languages_scroller__content.mousetouchend(); });
			document.addEventListener('pointermove', me._languages_scroller.pointermoveListener = function() { me._languages_scroller__content.mousetouchmove(); });
		}
		elHorScrollBg = me._languages_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 254px; height: 5px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._languages_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 254px; height: 5px; background-color: rgba(255,255,255,0.705882); pointer-events: auto;');
		me._languages_scroller.ggScrollPosX = 0;
		me._languages_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._languages_scroller.ggDragLastX = e.clientX;
			document.addEventListener('mouseup', me._languages_scroller.horMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaX *= 0.96;
					me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
					if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._languages_scroller.horMouseupListener);
				document.removeEventListener('mousemove', me._languages_scroller.horMousemoveListener);
			});
			document.addEventListener('mousemove', me._languages_scroller.horMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._languages_scroller.ggDragLastX;
				me._languages_scroller.ggDragInertiaX = diffX;
				me._languages_scroller.ggDragLastX = e.clientX;
				me._languages_scroller.ggScrollByX(diffX);
			});
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._languages_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._languages_scroller.horTouchEnd = function() {
				let inertiaInterval = setInterval(function() {
					me._languages_scroller.ggDragInertiaX *= 0.96;
					me._languages_scroller.ggScrollByX(me._languages_scroller.ggDragInertiaX);
					if (Math.abs(me._languages_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._languages_scroller.horTouchendListener);
				document.removeEventListener('touchmove', me._languages_scroller.horTouchmoveListener);
				document.removeEventListener('pointerup', me._languages_scroller.horPointerupListener);
				document.removeEventListener('pointermove', me._languages_scroller.horPointermoveListener);
			}
			document.addEventListener('touchend', me._languages_scroller.horTouchendListener = function() { me._languages_scroller.horTouchEnd(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._languages_scroller.horPointerupListener = function() { me._languages_scroller.horTouchEnd(); });
			}
			me._languages_scroller.horTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._languages_scroller.ggDragLastX;
				me._languages_scroller.ggDragInertiaX = diffX;
				me._languages_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._languages_scroller.ggScrollByX(diffX);
			}
			document.addEventListener('touchmove', me._languages_scroller.horTouchmoveListener = function(e) { me._languages_scroller.horTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._languages_scroller.horPointermoveListener = function(e) { me._languages_scroller.horTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._languages_scroller.ggScrollWidth;
			if (e.offsetX < me._languages_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._languages_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._languages_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._languages_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._languages_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._languages_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._languages_scroller.ggScrollByXSmooth(30 * me._languages_scroller.ggHPercentVisible * wheelDelta);
		});
		elCornerBg = me._languages_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="languages_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 95px;';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 65px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._languages_scroller.ggScrollPosX / me._languages_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._languages_scroller__horScrollBg.style.visibility = 'inherit';
					me._languages_scroller__horScrollFg.style.visibility = 'inherit';
					me._languages_scroller.ggHorScrollVisible = true;
				} else {
					me._languages_scroller__horScrollBg.style.visibility = 'hidden';
					me._languages_scroller__horScrollFg.style.visibility = 'hidden';
					me._languages_scroller.ggHorScrollVisible = false;
				}
				if(me._languages_scroller.ggHorScrollVisible) {
					me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight - 5;
					if (me._languages_scroller.ggVertScrollVisible) {
						me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth - 5;
						me._languages_scroller.ggAvailableWidthWithScale = me._languages_scroller.getBoundingClientRect().width - me._languages_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._languages_scroller.ggAvailableWidth = me._languages_scroller.clientWidth;
						me._languages_scroller.ggAvailableWidthWithScale = me._languages_scroller.getBoundingClientRect().width;
					}
					me._languages_scroller__horScrollBg.style.width = me._languages_scroller.ggAvailableWidth + 'px';
					me._languages_scroller.ggHPercentVisible = contentWidth != 0 ? me._languages_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._languages_scroller.ggHPercentVisible > 1.0) me._languages_scroller.ggHPercentVisible = 1.0;
					me._languages_scroller.ggScrollWidth = Math.round(me._languages_scroller__horScrollBg.offsetWidth * me._languages_scroller.ggHPercentVisible);
					me._languages_scroller__horScrollFg.style.width = me._languages_scroller.ggScrollWidth + 'px';
					me._languages_scroller.ggScrollPosX = me._languages_scroller.ggScrollPosXPercent * me._languages_scroller.ggAvailableWidth;
					me._languages_scroller.ggScrollPosX = Math.min(me._languages_scroller.ggScrollPosX, me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
					me._languages_scroller__horScrollFg.style.left = me._languages_scroller.ggScrollPosX + 'px';
					if (me._languages_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._languages_scroller.ggScrollPosX / (me._languages_scroller__horScrollBg.offsetWidth - me._languages_scroller__horScrollFg.offsetWidth);
						me._languages_scroller__content.style.left = -(Math.round((me._languages_scroller.ggContentWidth * (1.0 - me._languages_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._languages_scroller.ggAvailableHeight = me._languages_scroller.clientHeight;
					me._languages_scroller.ggScrollPosX = 0;
					me._languages_scroller.ggScrollPosXPercent = 0.0;
					me._languages_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(horScrollWasVisible != me._languages_scroller.ggHorScrollVisible || vertScrollWasVisible != me._languages_scroller.ggVertScrollVisible) {
					skin.updateSize(me._languages_scroller);
					me._languages_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._languages_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._languages_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 4;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 125;
		el.ggHeight = 22;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggUpdate = function(filter) {
			if(me._languages_cloner.ggUpdating == true) return;
			me._languages_cloner.ggUpdating = true;
			var el=me._languages_cloner;
			var curNumRows = 0;
			curNumRows = me._languages_cloner.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if ((el.ggNumRows == curNumRows) && !el.ggSizeChanged && false) {
				me._languages_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._languages_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._languages_cloner.ggNumFilterPassed = el.ggTranslations.length;
			for (var i = 0; i < el.ggTranslations.length; i++) {
				var cItem = el.ggTranslations[i];
				var nodeId = {};
				nodeId['tag'] = cItem.langCode;
				nodeId['title'] = cItem.langName;
				if (!keepCloning || i < me._languages_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._languages_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._languages_cloner.ggWidth) + 'px';
				parameter.width=me._languages_cloner.ggWidth + 'px';
				parameter.height=me._languages_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_languages_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
			}
			me._languages_cloner.ggNodeCount = me._languages_cloner.ggNumFilterPassed;
			me._languages_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._languages_cloner.parentNode && me._languages_cloner.parentNode.classList.contains('ggskin_subelement') && me._languages_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._languages_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTranslations = [];
		el.ggId="languages_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 22px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 125px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._languages_cloner.childNodes.length; i++) {
				var child=me._languages_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._languages_cloner.ggUpdatePosition=function (useTransition) {
			me._languages_cloner.ggUpdate();
		}
		me._languages_scroller__content.appendChild(me._languages_cloner);
		me._languages.appendChild(me._languages_scroller);
		el=me._languages_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="languages_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._languages_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_top.onclick=function (e) {
			player.setVariableValue('vis_languages', false);
			player.setVariableValue('vis_phone_languages', false);
		}
		me._languages_top.onmouseenter=function (e) {
			me.elementMouseOver['languages_top']=true;
			me._languages_close_btn.logicBlock_visible();
			me._languages_close_btn_active.logicBlock_visible();
		}
		me._languages_top.onmouseleave=function (e) {
			me.elementMouseOver['languages_top']=false;
			me._languages_close_btn.logicBlock_visible();
			me._languages_close_btn_active.logicBlock_visible();
		}
		me._languages_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._languages_close_btn=document.createElement('div');
		els=me._languages_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._languages_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="languages_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._languages_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['languages_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages_close_btn.style.transition='';
				if (me._languages_close_btn.ggCurrentLogicStateVisible == 0) {
					me._languages_close_btn.style.visibility="hidden";
					me._languages_close_btn.ggVisible=false;
				}
				else {
					me._languages_close_btn.style.visibility=(Number(me._languages_close_btn.style.opacity)>0||!me._languages_close_btn.style.opacity)?'inherit':'hidden';
					me._languages_close_btn.ggVisible=true;
				}
			}
		}
		me._languages_close_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._languages_close_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._languages_close_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._languages_close_btn.style.transition='';
				if (me._languages_close_btn.ggCurrentLogicStateTabIndex == 0) {
					me._languages_close_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._languages_close_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._languages_close_btn.onclick=function (e) {
			player.setVariableValue('vis_share', false);
			player.setVariableValue('vis_phone_share', false);
		}
		me._languages_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._languages_top.appendChild(me._languages_close_btn);
		el=me._languages_close_btn_active=document.createElement('div');
		els=me._languages_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxsaW5lIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjciIHgyPSI5IiB5MT0iOSIgeTI9IjI3Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjkiIHgyPSIyNyIgeTE9IjkiIHkyPSIyNyIvPgo8L3N2Zz4K';
		me._languages_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="languages_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._languages_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._languages_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['languages_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._languages_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._languages_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._languages_close_btn_active.style.transition='';
				if (me._languages_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._languages_close_btn_active.style.visibility=(Number(me._languages_close_btn_active.style.opacity)>0||!me._languages_close_btn_active.style.opacity)?'inherit':'hidden';
					me._languages_close_btn_active.ggVisible=true;
				}
				else {
					me._languages_close_btn_active.style.visibility="hidden";
					me._languages_close_btn_active.ggVisible=false;
				}
			}
		}
		me._languages_close_btn_active.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._languages_close_btn_active.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._languages_close_btn_active.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._languages_close_btn_active.style.transition='';
				if (me._languages_close_btn_active.ggCurrentLogicStateTabIndex == 0) {
					me._languages_close_btn_active.setAttribute('tabindex', '-1');
				}
				else {
					me._languages_close_btn_active.setAttribute('tabindex', '0');
				}
			}
		}
		me._languages_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._languages_top.appendChild(me._languages_close_btn_active);
		me._languages.appendChild(me._languages_top);
		me.divSkin.appendChild(me._languages);
		el=me._share=document.createElement('div');
		el.ggId="share";
		el.ggDx=0;
		el.ggDy=-80;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 0px) / 2) - 80px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_phone_share') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._share.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._share.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._share.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._share.ggCurrentLogicStatePosition == 0) {
					me._share.style.left = 'calc(50% - (300px / 2))';
					me._share.style.top = 'calc(50% - (180px / 2))';
				}
				else {
					me._share.style.left='calc(50% - ((300px + 0px) / 2) + 0px)';
					me._share.style.top='calc(50% - ((180px + 0px) / 2) - 80px)';
				}
			}
		}
		me._share.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_share') == true)) || 
				((player.getVariableValue('vis_phone_share') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._share.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._share.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._share.style.transition='left 0s, top 0s, opacity 500ms ease 0ms';
				if (me._share.ggCurrentLogicStateAlpha == 0) {
					me._share.style.visibility=me._share.ggVisible?'inherit':'hidden';
					me._share.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._share.style.opacity == 0.0) { me._share.style.visibility="hidden"; } }, 505);
					me._share.style.opacity=0;
				}
			}
		}
		me._share.ggUpdatePosition=function (useTransition) {
		}
		el=me._share_bg=document.createElement('div');
		el.ggId="share_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share_bg.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._share_bg);
		el=me._share_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="share_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share_top.onclick=function (e) {
			player.setVariableValue('vis_share', false);
			player.setVariableValue('vis_phone_share', false);
		}
		me._share_top.onmouseenter=function (e) {
			me.elementMouseOver['share_top']=true;
			me._share_close_btn.logicBlock_visible();
			me._share_close_btn_active.logicBlock_visible();
		}
		me._share_top.onmouseleave=function (e) {
			me.elementMouseOver['share_top']=false;
			me._share_close_btn.logicBlock_visible();
			me._share_close_btn_active.logicBlock_visible();
		}
		me._share_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._share_close_btn=document.createElement('div');
		els=me._share_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._share_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="share_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._share_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['share_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._share_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._share_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._share_close_btn.style.transition='';
				if (me._share_close_btn.ggCurrentLogicStateVisible == 0) {
					me._share_close_btn.style.visibility="hidden";
					me._share_close_btn.ggVisible=false;
				}
				else {
					me._share_close_btn.style.visibility=(Number(me._share_close_btn.style.opacity)>0||!me._share_close_btn.style.opacity)?'inherit':'hidden';
					me._share_close_btn.ggVisible=true;
				}
			}
		}
		me._share_close_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._share_close_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._share_close_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._share_close_btn.style.transition='';
				if (me._share_close_btn.ggCurrentLogicStateTabIndex == 0) {
					me._share_close_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._share_close_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._share_close_btn.onclick=function (e) {
			player.setVariableValue('vis_share', false);
			player.setVariableValue('vis_phone_share', false);
		}
		me._share_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._share_top.appendChild(me._share_close_btn);
		el=me._share_close_btn_active=document.createElement('div');
		els=me._share_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxsaW5lIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjciIHgyPSI5IiB5MT0iOSIgeTI9IjI3Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjkiIHgyPSIyNyIgeTE9IjkiIHkyPSIyNyIvPgo8L3N2Zz4K';
		me._share_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="share_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 15px;';
		hs+='top : 15px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._share_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['share_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._share_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._share_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._share_close_btn_active.style.transition='';
				if (me._share_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._share_close_btn_active.style.visibility=(Number(me._share_close_btn_active.style.opacity)>0||!me._share_close_btn_active.style.opacity)?'inherit':'hidden';
					me._share_close_btn_active.ggVisible=true;
				}
				else {
					me._share_close_btn_active.style.visibility="hidden";
					me._share_close_btn_active.ggVisible=false;
				}
			}
		}
		me._share_close_btn_active.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._share_close_btn_active.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._share_close_btn_active.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._share_close_btn_active.style.transition='';
				if (me._share_close_btn_active.ggCurrentLogicStateTabIndex == 0) {
					me._share_close_btn_active.setAttribute('tabindex', '-1');
				}
				else {
					me._share_close_btn_active.setAttribute('tabindex', '0');
				}
			}
		}
		me._share_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._share_top.appendChild(me._share_close_btn_active);
		el=me._share_title=document.createElement('div');
		els=me._share_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="share_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._share_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("Share", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._share_title.ggUpdateText();
		el.appendChild(els);
		me._share_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share_title.ggUpdatePosition=function (useTransition) {
		}
		me._share_top.appendChild(me._share_title);
		me._share.appendChild(me._share_top);
		el=me._share_container=document.createElement('div');
		el.ggId="share_container";
		el.ggDx=0;
		el.ggDy=20;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((156px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((36px + 0px) / 2) + 20px);';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._facebook_btn=document.createElement('div');
		els=me._facebook_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik0yNywzaC'+
			'00LjUmI3hhOyYjeDk7QzE4LjQsMywxNSw2LjQsMTUsMTAuNVYxNWgtNC41djZIMTV2MTJoNlYyMWg0LjVsMS41LTZoLTZ2LTQuNUMyMSw5LjcsMjEuNyw5LDIyLjUsOUgyN1YzeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNGZiNWMyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjEuMjUiLz4KPC9zdmc+Cg==';
		me._facebook_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._facebook_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjcsM2gtNC41QzE4LjQsMywxNSw2LjQsMTUsMTAuNVYxNWgtNC41djZIMTV2MTJoNlYyMWg0LjVsMS41LTZoLTZ2LTQuNUMyMSw5LjcsMjEuNyw5LDIyLjUsOUgyN1YzeiIvPgo8L3N2Zz4K';
		me._facebook_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="facebook_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._facebook_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._facebook_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._facebook_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._facebook_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._facebook_btn.style.transition='';
				if (me._facebook_btn.ggCurrentLogicStateVisible == 0) {
					me._facebook_btn.style.visibility=(Number(me._facebook_btn.style.opacity)>0||!me._facebook_btn.style.opacity)?'inherit':'hidden';
					me._facebook_btn.ggVisible=true;
				}
				else {
					me._facebook_btn.style.visibility="hidden";
					me._facebook_btn.ggVisible=false;
				}
			}
		}
		me._facebook_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._facebook_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._facebook_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._facebook_btn.style.transition='';
				if (me._facebook_btn.ggCurrentLogicStateTabIndex == 0) {
					me._facebook_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._facebook_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._facebook_btn.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._facebook_btn.onmouseenter=function (e) {
			me._facebook_btn__img.style.visibility='hidden';
			me._facebook_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['facebook_btn']=true;
		}
		me._facebook_btn.onmouseleave=function (e) {
			me._facebook_btn__img.style.visibility='inherit';
			me._facebook_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['facebook_btn']=false;
		}
		me._facebook_btn.ggUpdatePosition=function (useTransition) {
		}
		me._share_container.appendChild(me._facebook_btn);
		el=me._twitter_btn=document.createElement('div');
		els=me._twitter_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOCAyODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI4IDI4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0ZmI1YzI7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LDEyLjNsNy45LTkuMUgyMmwtNi44LDcuOUw5LjcsMy4ySDMuNGw4LjIsMTJsLTguMiw5LjZoMS45bDcuMi04LjRsNS44LDguNGg2LjNMMTYsMTIuM0wxNiwxMi4zeiAgIE0xMy40LDE1LjNsLTAuOC0xLjJMNiw0LjZoMi45bDUuNCw3LjdsMC44LDEuMmw3LDEwaC0yLjlMMTMuNCwxNS4zTDEzLjQsMTUuM3oiLz4KPC9zdmc+Cg==';
		me._twitter_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._twitter_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyOCAyODsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI4IDI4IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNmZmZmZmY7fQo8L3N0eWxlPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LDEyLjNsNy45LTkuMUgyMmwtNi44LDcuOUw5LjcsMy4ySDMuNGw4LjIsMTJsLTguMiw5LjZoMS45bDcuMi04LjRsNS44LDguNGg2LjNMMTYsMTIuM0wxNiwxMi4zeiAgIE0xMy40LDE1LjNsLTAuOC0xLjJMNiw0LjZoMi45bDUuNCw3LjdsMC44LDEuMmw3LDEwaC0yLjlMMTMuNCwxNS4zTDEzLjQsMTUuM3oiLz4KPC9zdmc+Cg==';
		me._twitter_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="twitter_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._twitter_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._twitter_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._twitter_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._twitter_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._twitter_btn.style.transition='';
				if (me._twitter_btn.ggCurrentLogicStateVisible == 0) {
					me._twitter_btn.style.visibility=(Number(me._twitter_btn.style.opacity)>0||!me._twitter_btn.style.opacity)?'inherit':'hidden';
					me._twitter_btn.ggVisible=true;
				}
				else {
					me._twitter_btn.style.visibility="hidden";
					me._twitter_btn.ggVisible=false;
				}
			}
		}
		me._twitter_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._twitter_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._twitter_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._twitter_btn.style.transition='';
				if (me._twitter_btn.ggCurrentLogicStateTabIndex == 0) {
					me._twitter_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._twitter_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._twitter_btn.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._twitter_btn.onmouseenter=function (e) {
			me._twitter_btn__img.style.visibility='hidden';
			me._twitter_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['twitter_btn']=true;
		}
		me._twitter_btn.onmouseleave=function (e) {
			me._twitter_btn__img.style.visibility='inherit';
			me._twitter_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['twitter_btn']=false;
		}
		me._twitter_btn.ggUpdatePosition=function (useTransition) {
		}
		me._share_container.appendChild(me._twitter_btn);
		el=me._copy_btn=document.createElement('div');
		els=me._copy_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxwYXRoIGQ9Ik0xNi41LD'+
			'EzLjVIMzAmI3hhOyYjeDk7YzEuNywwLDMsMS4zLDMsM1YzMGMwLDEuNy0xLjMsMy0zLDNIMTYuNWMtMS43LDAtMy0xLjMtMy0zVjE2LjVDMTMuNSwxNC44LDE0LjgsMTMuNSwxNi41LDEzLjV6IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZmI1YzIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgogPHBhdGggZD0iTTcuNSwyMi41SDYmI3hhOyYjeDk7Yy0xLjcsMC0zLTEuMy0zLTNWNmMwLTEuNywxLjMtMywzLTNoMTMuNWMxLjcsMCwzLDEuMywzLDN2MS41IiBmaWxsPSJub25lIiBzdHJv'+
			'a2U9IiM0ZmI1YzIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIvPgo8L3N2Zz4K';
		me._copy_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._copy_btn__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4yNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTYuNSwxMy41SDMwYzEuNywwLDMsMS4zLDMsM1YzMGMwLDEuNy0xLjMsMy0zLDNIMTYuNWMtMS43LDAtMy0xLjMtMy0zVjE2LjVDMTMuNSwxNC44LDE0LjgsMTMuNSwxNi41LDEzLjV6Ii8+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy41LDIyLjVINmMtMS43LDAtMy0xLjMtMy0zVjZjMC0xLjcsMS4z'+
			'LTMsMy0zaDEzLjVjMS43LDAsMywxLjMsMywzdjEuNSIvPgo8L3N2Zz4K';
		me._copy_btn__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="copy_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._copy_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._copy_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._copy_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._copy_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._copy_btn.style.transition='';
				if (me._copy_btn.ggCurrentLogicStateVisible == 0) {
					me._copy_btn.style.visibility=(Number(me._copy_btn.style.opacity)>0||!me._copy_btn.style.opacity)?'inherit':'hidden';
					me._copy_btn.ggVisible=true;
				}
				else {
					me._copy_btn.style.visibility="hidden";
					me._copy_btn.ggVisible=false;
				}
			}
		}
		me._copy_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._copy_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._copy_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._copy_btn.style.transition='';
				if (me._copy_btn.ggCurrentLogicStateTabIndex == 0) {
					me._copy_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._copy_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._copy_btn.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + (Math.round(player.getPan() * 100) / 100) + "," + (Math.round(player.getTilt() * 100) / 100) + "," + (Math.round(player.getFov() * 100) / 100) + "," + player.getProjection();

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("The current view has been copied.");
		}
		me._copy_btn.onmouseenter=function (e) {
			me._copy_btn__img.style.visibility='hidden';
			me._copy_btn__imgo.style.visibility='inherit';
			me.elementMouseOver['copy_btn']=true;
		}
		me._copy_btn.onmouseleave=function (e) {
			me._copy_btn__img.style.visibility='inherit';
			me._copy_btn__imgo.style.visibility='hidden';
			me.elementMouseOver['copy_btn']=false;
		}
		me._copy_btn.ggUpdatePosition=function (useTransition) {
		}
		me._share_container.appendChild(me._copy_btn);
		me._share.appendChild(me._share_container);
		me.divSkin.appendChild(me._share);
		el=me._video_popup=document.createElement('div');
		el.ggId="video_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - 240px);';
		hs+='left : calc(50% - ((calc(100% - 240px) + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 120px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 240px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('vis_menu_center') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._video_popup.ggCurrentLogicStateSize != newLogicStateSize) {
				me._video_popup.ggCurrentLogicStateSize = newLogicStateSize;
				me._video_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._video_popup.ggCurrentLogicStateSize == 0) {
					me._video_popup.style.width='calc(100% - 240px)';
					me._video_popup.style.height='calc(100% - 320px)';
					me._video_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					setTimeout(function() {skin.updateSize(me._video_popup);}, 850);
				}
				else {
					me._video_popup.style.width='calc(100% - 240px)';
					me._video_popup.style.height='calc(100% - 240px)';
					me._video_popup.style.left = 'calc(50% - (calc(100% - 240px) / 2))';
					setTimeout(function() {skin.updateSize(me._video_popup);}, 850);
				}
			}
		}
		me._video_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_video_popup') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._video_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._video_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._video_popup.style.transition='width 800ms step-end 0ms, height 800ms step-end 0ms, left 800ms step-end 0ms, opacity 500ms ease 0ms';
				if (me._video_popup.ggCurrentLogicStateAlpha == 0) {
					me._video_popup.style.visibility=me._video_popup.ggVisible?'inherit':'hidden';
					me._video_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._video_popup.style.opacity == 0.0) { me._video_popup.style.visibility="hidden"; } }, 505);
					me._video_popup.style.opacity=0;
				}
			}
		}
		me._video_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_bg=document.createElement('div');
		el.ggId="video_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_bg);
		el=me._video_controller=document.createElement('div');
		el.ggId="video_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((350px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true)) || 
				((player.getVariableValue('vis_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller.style.transition='';
				if (me._video_controller.ggCurrentLogicStateVisible == 0) {
					me._video_controller.style.visibility=(Number(me._video_controller.style.opacity)>0||!me._video_controller.style.opacity)?'inherit':'hidden';
					me._video_controller.ggVisible=true;
				}
				else {
					me._video_controller.style.visibility="hidden";
					me._video_controller.ggVisible=false;
				}
			}
		}
		me._video_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar=document.createElement('div');
		me._video_controller_seekbar__playhead=document.createElement('div');
		me._video_controller_seekbar.mediaEl = null;
		me._video_controller_seekbar.fromBufferSource = false;
		me._video_controller_seekbar.ggMediaId = '';
		el.ggId="video_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((4px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar || e.target == me._video_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar.onmousedown = me._video_controller_seekbar.ontouchstart = me._video_controller_seekbar.mouseTouchHandling;
		me._video_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar.style.background = '#3c3c3c';
				me._video_controller_seekbar.ggConnected = false;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.removeEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.removeEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar.mediaEl = player.getMediaObject(me._video_controller_seekbar.ggMediaId);
			if (me._video_controller_seekbar.mediaEl) {
				me._video_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				me._video_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar__playhead.style.left = '-13px';
				if (me._video_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.addEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.addEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_controller_seekbar.ggConnected) return;
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.mediaEl.readyState || (me._video_controller_seekbar.fromBufferSource && args && args['id'] == me._video_controller_seekbar.mediaEl.id)) {
					if (me._video_controller_seekbar.fromBufferSource) {
						var percent = me._video_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar.mediaEl.currentTime / me._video_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar.clientWidth - 2 * 2 + 0) * percent);
					playheadpos += -13;
					me._video_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(90,90,90,1) ' + currPos +'%, rgba(90,90,90,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar.mediaEl.buffered.start(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar.mediaEl.buffered.end(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(90,90,90,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(90,90,90,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(90,90,90,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar.appendChild(me._video_controller_seekbar__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(79,181,194,1);';
		me._video_controller_seekbar.setAttribute('style', hs);
		me._video_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar.ggIsActive=function() {
			if (me._video_controller_seekbar.mediaEl != null) {
				return (me._video_controller_seekbar.mediaEl.paused == false && me._video_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar.updatePlayback();
		}
		me._video_controller.appendChild(me._video_controller_seekbar);
		me._video_popup.appendChild(me._video_controller);
		el=me._video_popup_title=document.createElement('div');
		els=me._video_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="video_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._video_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._video_popup_title.ggUpdateText();
		el.appendChild(els);
		me._video_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup.appendChild(me._video_popup_title);
		el=me._video_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="video_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_top.onclick=function (e) {
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_video_youtube', false);
			player.setVariableValue('vis_video_vimeo', false);
			player.setVariableValue('vis_video_file', false);
			player.setVariableValue('vis_video_url', false);
		}
		me._video_popup_top.onmouseenter=function (e) {
			me.elementMouseOver['video_popup_top']=true;
			me._video_popup_close_btn.logicBlock_visible();
			me._video_popup_close_btn_active.logicBlock_visible();
		}
		me._video_popup_top.onmouseleave=function (e) {
			me.elementMouseOver['video_popup_top']=false;
			me._video_popup_close_btn.logicBlock_visible();
			me._video_popup_close_btn_active.logicBlock_visible();
		}
		me._video_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_popup_close_btn=document.createElement('div');
		els=me._video_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._video_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._video_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['video_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_btn.style.transition='';
				if (me._video_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_btn.style.visibility="hidden";
					me._video_popup_close_btn.ggVisible=false;
				}
				else {
					me._video_popup_close_btn.style.visibility=(Number(me._video_popup_close_btn.style.opacity)>0||!me._video_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._video_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._video_popup_close_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._video_popup_close_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._video_popup_close_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._video_popup_close_btn.style.transition='';
				if (me._video_popup_close_btn.ggCurrentLogicStateTabIndex == 0) {
					me._video_popup_close_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._video_popup_close_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._video_popup_close_btn.onclick=function (e) {
			player.setVariableValue('vis_video_popup', false);
			player.setVariableValue('vis_video_youtube', false);
			player.setVariableValue('vis_video_vimeo', false);
			player.setVariableValue('vis_video_file', false);
			player.setVariableValue('vis_video_url', false);
		}
		me._video_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_top.appendChild(me._video_popup_close_btn);
		el=me._video_popup_close_btn_active=document.createElement('div');
		els=me._video_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxsaW5lIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjciIHgyPSI5IiB5MT0iOSIgeTI9IjI3Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjkiIHgyPSIyNyIgeTE9IjkiIHkyPSIyNyIvPgo8L3N2Zz4K';
		me._video_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="video_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._video_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['video_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_btn_active.style.transition='';
				if (me._video_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_btn_active.style.visibility=(Number(me._video_popup_close_btn_active.style.opacity)>0||!me._video_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._video_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._video_popup_close_btn_active.style.visibility="hidden";
					me._video_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._video_popup_close_btn_active.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._video_popup_close_btn_active.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._video_popup_close_btn_active.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._video_popup_close_btn_active.style.transition='';
				if (me._video_popup_close_btn_active.ggCurrentLogicStateTabIndex == 0) {
					me._video_popup_close_btn_active.setAttribute('tabindex', '-1');
				}
				else {
					me._video_popup_close_btn_active.setAttribute('tabindex', '0');
				}
			}
		}
		me._video_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_top.appendChild(me._video_popup_close_btn_active);
		me._video_popup.appendChild(me._video_popup_top);
		me.divSkin.appendChild(me._video_popup);
		el=me._info_popup=document.createElement('div');
		el.ggId="info_popup";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(60% - 240px);';
		hs+='left : calc(50% - ((400px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(60% - 240px) + 0px) / 2) + 1px);';
		hs+='visibility : hidden;';
		hs+='width : 400px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player._(me.ggUserdata.description) == "")) && 
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._info_popup.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._info_popup.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._info_popup.style.transition='opacity 500ms ease 0ms';
				if (me._info_popup.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._info_popup.style.opacity == 0.0) { me._info_popup.style.visibility="hidden"; } }, 505);
					me._info_popup.style.opacity=0;
				}
				else if (me._info_popup.ggCurrentLogicStateAlpha == 1) {
					me._info_popup.style.visibility=me._info_popup.ggVisible?'inherit':'hidden';
					me._info_popup.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._info_popup.style.opacity == 0.0) { me._info_popup.style.visibility="hidden"; } }, 505);
					me._info_popup.style.opacity=0;
				}
			}
		}
		me._info_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_bg=document.createElement('div');
		el.ggId="info_popup_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_bg);
		el=me._info_popup_text=document.createElement('div');
		els=me._info_popup_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		els.setAttribute('tabindex', '0');
		el.ggTextDiv=els;
		el.ggId="info_popup_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='line-height: 1.5;';
		els.setAttribute('style',hs);
		me._info_popup_text.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_text.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._info_popup_text.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._info_popup_text.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._info_popup_text.style.transition='';
				if (me._info_popup_text.ggCurrentLogicStateTabIndex == 0) {
					me._info_popup_text.setAttribute('tabindex', '-1');
				}
				else {
					me._info_popup_text.setAttribute('tabindex', '0');
				}
			}
		}
		me._info_popup_text.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_text);
		el=me._info_popup_title=document.createElement('div');
		els=me._info_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_title.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._info_popup_title.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._info_popup_title.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._info_popup_title.style.transition='';
				if (me._info_popup_title.ggCurrentLogicStateTabIndex == 0) {
					me._info_popup_title.setAttribute('tabindex', '-1');
				}
				else {
					me._info_popup_title.setAttribute('tabindex', '0');
				}
			}
		}
		me._info_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_title);
		el=me._info_popup_top=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="info_popup_top";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_top.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_top.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_info', false);
		}
		me._info_popup_top.onmouseenter=function (e) {
			me.elementMouseOver['info_popup_top']=true;
			me._info_popup_close_btn.logicBlock_visible();
			me._info_popup_close_btn_active.logicBlock_visible();
		}
		me._info_popup_top.onmouseleave=function (e) {
			me.elementMouseOver['info_popup_top']=false;
			me._info_popup_close_btn.logicBlock_visible();
			me._info_popup_close_btn_active.logicBlock_visible();
		}
		me._info_popup_top.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_close_btn=document.createElement('div');
		els=me._info_popup_close_btn__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._info_popup_close_btn__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close_btn";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._info_popup_close_btn.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_close_btn.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_close_btn.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_close_btn.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_close_btn.style.transition='';
				if (me._info_popup_close_btn.ggCurrentLogicStateVisible == 0) {
					me._info_popup_close_btn.style.visibility="hidden";
					me._info_popup_close_btn.ggVisible=false;
				}
				else {
					me._info_popup_close_btn.style.visibility=(Number(me._info_popup_close_btn.style.opacity)>0||!me._info_popup_close_btn.style.opacity)?'inherit':'hidden';
					me._info_popup_close_btn.ggVisible=true;
				}
			}
		}
		me._info_popup_close_btn.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._info_popup_close_btn.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._info_popup_close_btn.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._info_popup_close_btn.style.transition='';
				if (me._info_popup_close_btn.ggCurrentLogicStateTabIndex == 0) {
					me._info_popup_close_btn.setAttribute('tabindex', '-1');
				}
				else {
					me._info_popup_close_btn.setAttribute('tabindex', '0');
				}
			}
		}
		me._info_popup_close_btn.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			player.setVariableValue('vis_info', false);
		}
		me._info_popup_close_btn.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_top.appendChild(me._info_popup_close_btn);
		el=me._info_popup_close_btn_active=document.createElement('div');
		els=me._info_popup_close_btn_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGJhc2VQcm9maWxlPSJ0aW55IiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeT0iMHB4Ij4KIDxsaW5lIGZpbGw9Im5vbm'+
			'UiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxLjI1IiB4MT0iMjciIHgyPSI5IiB5MT0iOSIgeTI9IjI3Ii8+CiA8bGluZSBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS13aWR0aD0iMS4yNSIgeDE9IjkiIHgyPSIyNyIgeTE9IjkiIHkyPSIyNyIvPgo8L3N2Zz4K';
		me._info_popup_close_btn_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="info_popup_close_btn_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.setAttribute('role', 'button');
		el.style.transformOrigin='50% 50%';
		me._info_popup_close_btn_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_close_btn_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info_popup_top'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_close_btn_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_close_btn_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_close_btn_active.style.transition='';
				if (me._info_popup_close_btn_active.ggCurrentLogicStateVisible == 0) {
					me._info_popup_close_btn_active.style.visibility=(Number(me._info_popup_close_btn_active.style.opacity)>0||!me._info_popup_close_btn_active.style.opacity)?'inherit':'hidden';
					me._info_popup_close_btn_active.ggVisible=true;
				}
				else {
					me._info_popup_close_btn_active.style.visibility="hidden";
					me._info_popup_close_btn_active.ggVisible=false;
				}
			}
		}
		me._info_popup_close_btn_active.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._info_popup_close_btn_active.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._info_popup_close_btn_active.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._info_popup_close_btn_active.style.transition='';
				if (me._info_popup_close_btn_active.ggCurrentLogicStateTabIndex == 0) {
					me._info_popup_close_btn_active.setAttribute('tabindex', '-1');
				}
				else {
					me._info_popup_close_btn_active.setAttribute('tabindex', '0');
				}
			}
		}
		me._info_popup_close_btn_active.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_top.appendChild(me._info_popup_close_btn_active);
		me._info_popup.appendChild(me._info_popup_top);
		me.divSkin.appendChild(me._info_popup);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 180px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((180px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiM0ZmI1YzI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIzNC41IiB4Mj0iMjUuNSIgeTE9IjEzLjUiIHkyPSIyMi41Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjUuNSIgeDI9IjM0LjUiIHkxPSIxMy41IiB5Mj0iMjIuNSIvPgo8'+
			'L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxsaW5lIGNsYXNzPSJzdDAiIHgxPSIzNC41IiB4Mj0iMjUuNSIgeTE9IjEzLjUiIHkyPSIyMi41Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjUuNSIgeDI9IjM0LjUiIHkxPSIxMy41IiB5Mj0iMjIuNSIvPgo8'+
			'L3N2Zz4K';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=60;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) + 60px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_off.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._sounds_off.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._sounds_off.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._sounds_off.style.transition='';
				if (me._sounds_off.ggCurrentLogicStateTabIndex == 0) {
					me._sounds_off.setAttribute('tabindex', '-1');
				}
				else {
					me._sounds_off.setAttribute('tabindex', '0');
				}
			}
		}
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiM0ZmI1YzI7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOC42LDcuNGM1LjksNS45LDUuOSwxNS40LDAsMjEuMiBNMjMuMywxMi43YzIuOSwyLjksMi45LDcuNywwLDEwLjYiLz4KPC9zdmc+Cg==';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNiAzNjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM2IDM2IiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjEuMjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30KPC9zdHlsZT4KIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTYuNSw3LjUgOSwxMy41IDMsMTMuNSAzLDIyLjUgOSwyMi41IDE2LjUsMjguNSAiLz4KIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOC42LDcuNGM1LjksNS45LDUuOSwxNS40LDAsMjEuMiBNMjMuMywxMi43YzIuOSwyLjksMi45LDcuNywwLDEwLjYiLz4KPC9zdmc+Cg==';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-60;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : calc(50% - ((72px + 0px) / 2) - 60px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((72px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_on.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._sounds_on.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._sounds_on.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._sounds_on.style.transition='';
				if (me._sounds_on.ggCurrentLogicStateTabIndex == 0) {
					me._sounds_on.setAttribute('tabindex', '-1');
				}
				else {
					me._sounds_on.setAttribute('tabindex', '0');
				}
			}
		}
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._screentint_phone=document.createElement('div');
		el.ggId="screentint_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : rgba(0,0,0,0.705882);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true)) || 
				((player.getVariableValue('vis_phone_info') == true)) || 
				((player.getVariableValue('vis_phone_floorplan') == true)) || 
				((player.getVariableValue('vis_phone_map') == true)) || 
				((player.getVariableValue('vis_phone_image') == true)) || 
				((player.getVariableValue('vis_phone_pdf') == true)) || 
				((player.getVariableValue('vis_phone_youtube') == true)) || 
				((player.getVariableValue('vis_phone_vimeo') == true)) || 
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._screentint_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._screentint_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._screentint_phone.style.transition='opacity 500ms ease 0ms';
				if (me._screentint_phone.ggCurrentLogicStateAlpha == 0) {
					me._screentint_phone.style.visibility=me._screentint_phone.ggVisible?'inherit':'hidden';
					me._screentint_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._screentint_phone.style.opacity == 0.0) { me._screentint_phone.style.visibility="hidden"; } }, 505);
					me._screentint_phone.style.opacity=0;
				}
			}
		}
		me._screentint_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 80px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_floorplan', false);
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_image', false);
			player.setVariableValue('vis_phone_pdf', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
				me._phone_popup_title.ggUpdateText=function() {
					var params = [];
					var hs = player._("", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			me._phone_popup_title.ggUpdateText();
			me._phone_popup_title.ggTextDiv.scrollTop = 0;
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me.elementMouseOver['close_popup_phone']=true;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me.elementMouseOver['close_popup_phone']=false;
			me._btn_close_popup_phone.logicBlock_visible();
			me._btn_close_popup_phone_active.logicBlock_visible();
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_close_popup_phone=document.createElement('div');
		els=me._btn_close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6IzRmYjVjMjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone.style.transition='';
				if (me._btn_close_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone.style.visibility="hidden";
					me._btn_close_popup_phone.ggVisible=false;
				}
				else {
					me._btn_close_popup_phone.style.visibility=(Number(me._btn_close_popup_phone.style.opacity)>0||!me._btn_close_popup_phone.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone.ggVisible=true;
				}
			}
		}
		me._btn_close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone);
		el=me._btn_close_popup_phone_active=document.createElement('div');
		els=me._btn_close_popup_phone_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQiIHgyPSI4IiB5MT0iOCIgeTI9IjI0Ii8+CiA8bGluZSBjbGFzcz0ic3QwIiB4MT0iOCIgeDI9IjI0IiB5MT0iOCIgeTI9IjI0Ii8+Cjwvc3ZnPgo=';
		me._btn_close_popup_phone_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_close_popup_phone_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_close_popup_phone_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._btn_close_popup_phone_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['close_popup_phone'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_close_popup_phone_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_close_popup_phone_active.style.transition='';
				if (me._btn_close_popup_phone_active.ggCurrentLogicStateVisible == 0) {
					me._btn_close_popup_phone_active.style.visibility=(Number(me._btn_close_popup_phone_active.style.opacity)>0||!me._btn_close_popup_phone_active.style.opacity)?'inherit':'hidden';
					me._btn_close_popup_phone_active.ggVisible=true;
				}
				else {
					me._btn_close_popup_phone_active.style.visibility="hidden";
					me._btn_close_popup_phone_active.ggVisible=false;
				}
			}
		}
		me._btn_close_popup_phone_active.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._btn_close_popup_phone_active);
		el=me._phone_popup_title=document.createElement('div');
		els=me._phone_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="phone_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 100px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._phone_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._phone_popup_title.ggUpdateText();
		el.appendChild(els);
		me._phone_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._phone_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._close_popup_phone.appendChild(me._phone_popup_title);
		me._safe_area_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 75px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+='line-height: 1.5;';
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_text_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_text_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_text_phone.style.transition='';
				if (me._info_popup_text_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_text_phone.style.visibility=(Number(me._info_popup_text_phone.style.opacity)>0||!me._info_popup_text_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_text_phone.ggVisible=true;
				}
				else {
					me._info_popup_text_phone.style.visibility="hidden";
					me._info_popup_text_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._info_popup_text_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggInInteraction = false;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 129px;';
		hs+='left : 50%;';
		hs+='margin-left : -59.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 119px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone.ggInInteraction = false;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			if (!me._thumbnail_scroller_phone.ggInInteraction) return;
			e = e || window.event;
			if (e.buttons==0) {
				me._thumbnail_scroller_phone__content.mousetouchend();
				return;
			}
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone.ggInInteraction = true;
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		document.addEventListener('mouseup', me._thumbnail_scroller_phone.contentMouseupListener = function() { me._thumbnail_scroller_phone__content.mousetouchend(); });
		document.addEventListener('touchend', me._thumbnail_scroller_phone.contentTouchendListener = function() { me._thumbnail_scroller_phone__content.mousetouchend(); });
		document.addEventListener('mousemove', me._thumbnail_scroller_phone.contentMousemoveListener = function() { me._thumbnail_scroller_phone__content.mousetouchmove(); });
		document.addEventListener('touchmove', me._thumbnail_scroller_phone.contentTouchmoveListener = function() { me._thumbnail_scroller_phone__content.mousetouchmove(); });
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			document.addEventListener('pointerup', me._thumbnail_scroller_phone.pointerupListener = function() { me._thumbnail_scroller_phone__content.mousetouchend(); });
			document.addEventListener('pointermove', me._thumbnail_scroller_phone.pointermoveListener = function() { me._thumbnail_scroller_phone__content.mousetouchmove(); });
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.addEventListener('mouseup', me._thumbnail_scroller_phone.vertMouseupListener = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('mouseup', me._thumbnail_scroller_phone.vertMouseupListener);
				document.removeEventListener('mousemove', me._thumbnail_scroller_phone.vertMousemoveListener);
			});
			document.addEventListener('mousemove', me._thumbnail_scroller_phone.vertMousemoveListener = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			});
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone.vertTouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.removeEventListener('touchend', me._thumbnail_scroller_phone.vertTouchendListener);
				document.removeEventListener('touchmove', me._thumbnail_scroller_phone.vertTouchmoveListener);
				document.removeEventListener('pointerup', me._thumbnail_scroller_phone.vertPointerupListener);
				document.removeEventListener('pointermove', me._thumbnail_scroller_phone.vertPointermoveListener);
			}
			document.addEventListener('touchend', me._thumbnail_scroller_phone.vertTouchendListener = function() { me._thumbnail_scroller_phone.vertTouchend(); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointerup', me._thumbnail_scroller_phone.vertPointerupListener = function() { me._thumbnail_scroller_phone.vertTouchend(); });
			}
			me._thumbnail_scroller_phone.vertTouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			document.addEventListener('touchmove', me._thumbnail_scroller_phone.vertTouchmoveListener = function(e) { me._thumbnail_scroller_phone.vertTouchmove(e); });
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.addEventListener('pointermove', me._thumbnail_scroller_phone.vertPointermoveListener = function(e) { me._thumbnail_scroller_phone.vertTouchmove(e); });
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 80px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller_phone.style.transition='';
				if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller_phone.style.visibility=(Number(me._thumbnail_scroller_phone.style.opacity)>0||!me._thumbnail_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnail_scroller_phone.style.visibility="hidden";
					me._thumbnail_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 120;
		el.ggHeight = 130;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (!nodeData['tags'] || nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nope";
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		el.userData=el;
		hs ='';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._safe_area_phone.appendChild(me._thumbnail_scroller_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 105px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._safe_area_phone.appendChild(me._floorplan_el_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 40px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 40px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 4px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((4px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#3c3c3c';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-13px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 2 + 0) * percent);
					playheadpos += -13;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (2 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(90,90,90,0.392157) ' + currPos +'%, rgba(90,90,90,0.392157) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(90,90,90,0.392157) ' + currPos + '%';
								} else {
									gradientString += ', rgba(60,60,60,1) ' + currPos + '%, rgba(60,60,60,1) ' + rangeStart + '%';
									gradientString += ', rgba(90,90,90,0.392157) ' + rangeStart + '%';
								}
									gradientString += ', rgba(90,90,90,0.392157) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(60,60,60,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #3c3c3c;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 2px;';
		var hs_playhead = 'height: 30px;';
		hs_playhead += 'width: 30px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -13px;';
		hs_playhead += 'top: -13px;';
		hs_playhead += 'border-radius: 15px;';
		hs_playhead += cssPrefix + 'border-radius: 15px;';
		hs_playhead += 'background-color: rgba(79,181,194,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._safe_area_phone.appendChild(me._video_controller_phone);
		me._screentint_phone.appendChild(me._safe_area_phone);
		me.divSkin.appendChild(me._screentint_phone);
		el=me._keyboard_shortcuts=document.createElement('div');
		el.ggId="keyboard_shortcuts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._keyboard_shortcuts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._keyboard_shortcuts.ggUpdatePosition=function (useTransition) {
		}
		el=me._key_up=document.createElement('div');
		el.ggId="key_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Up');
		el.style.transformOrigin='50% 50%';
		me._key_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._key_up.onmousedown=function (e) {
			me.elementMouseDown['key_up']=true;
		}
		me._key_up.onmouseup=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.onmouseleave=function (e) {
			me.elementMouseDown['key_up']=false;
		}
		me._key_up.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_up']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changeTiltLog(0.3,true);
				}
			}
		}
		me._key_up.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_up);
		el=me._key_down=document.createElement('div');
		el.ggId="key_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Down');
		el.style.transformOrigin='50% 50%';
		me._key_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._key_down.onmousedown=function (e) {
			me.elementMouseDown['key_down']=true;
		}
		me._key_down.onmouseup=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.onmouseleave=function (e) {
			me.elementMouseDown['key_down']=false;
		}
		me._key_down.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_down']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changeTiltLog(-0.3,true);
				}
			}
		}
		me._key_down.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_down);
		el=me._key_left=document.createElement('div');
		el.ggId="key_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Left');
		el.style.transformOrigin='50% 50%';
		me._key_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._key_left.onmousedown=function (e) {
			me.elementMouseDown['key_left']=true;
		}
		me._key_left.onmouseup=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.onmouseleave=function (e) {
			me.elementMouseDown['key_left']=false;
		}
		me._key_left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_left']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changePanLog(0.3,true);
				}
			}
		}
		me._key_left.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_left);
		el=me._key_right=document.createElement('div');
		el.ggId="key_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'Right');
		el.style.transformOrigin='50% 50%';
		me._key_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._key_right.onmousedown=function (e) {
			me.elementMouseDown['key_right']=true;
		}
		me._key_right.onmouseup=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.onmouseleave=function (e) {
			me.elementMouseDown['key_right']=false;
		}
		me._key_right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_right']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changePanLog(-0.3,true);
				}
			}
		}
		me._key_right.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_right);
		el=me._key_s=document.createElement('div');
		el.ggId="key_s";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'S');
		el.style.transformOrigin='50% 50%';
		me._key_s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._key_s.onmousedown=function (e) {
			me.elementMouseDown['key_s']=true;
		}
		me._key_s.onmouseup=function (e) {
			me.elementMouseDown['key_s']=false;
		}
		me._key_s.onmouseleave=function (e) {
			me.elementMouseDown['key_s']=false;
		}
		me._key_s.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_s']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changeFovLog(0.3,true);
				}
			}
		}
		me._key_s.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_s);
		el=me._key_a=document.createElement('div');
		el.ggId="key_a";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', 'A');
		el.style.transformOrigin='50% 50%';
		me._key_a.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._key_a.onmousedown=function (e) {
			me.elementMouseDown['key_a']=true;
		}
		me._key_a.onmouseup=function (e) {
			me.elementMouseDown['key_a']=false;
		}
		me._key_a.onmouseleave=function (e) {
			me.elementMouseDown['key_a']=false;
		}
		me._key_a.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['key_a']) {
				if (
					(
						((player.getVariableValue('kb_accessibility') == true))
					)
				) {
					player.changeFovLog(-0.3,true);
				}
			}
		}
		me._key_a.ggUpdatePosition=function (useTransition) {
		}
		me._keyboard_shortcuts.appendChild(me._key_a);
		me.divSkin.appendChild(me._keyboard_shortcuts);
		el=me._model_load_spinner=document.createElement('div');
		els=me._model_load_spinner__img=document.createElement('img');
		els.className='ggskin ggskin_image';
		hs=basePath + 'images/model_load_spinner.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="model_load_spinner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		el.userData=el;
		hs ='';
		hs+='height : 120px;';
		hs+='position : absolute;';
		hs+='right : 32px;';
		hs+='top : 32px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._model_load_spinner.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._model_load_spinner.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._model_load_spinner.ggCurrentLogicStateSize != newLogicStateSize) {
				me._model_load_spinner.ggCurrentLogicStateSize = newLogicStateSize;
				me._model_load_spinner.style.transition='width 0s, height 0s';
				if (me._model_load_spinner.ggCurrentLogicStateSize == 0) {
					me._model_load_spinner.style.width='80px';
					me._model_load_spinner.style.height='80px';
					skin.updateSize(me._model_load_spinner);
				}
				else {
					me._model_load_spinner.style.width='120px';
					me._model_load_spinner.style.height='120px';
					skin.updateSize(me._model_load_spinner);
				}
			}
		}
		me._model_load_spinner.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('model_loading') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._model_load_spinner.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._model_load_spinner.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._model_load_spinner.style.transition='width 0s, height 0s';
				if (me._model_load_spinner.ggCurrentLogicStateVisible == 0) {
					me._model_load_spinner.style.visibility=(Number(me._model_load_spinner.style.opacity)>0||!me._model_load_spinner.style.opacity)?'inherit':'hidden';
					me._model_load_spinner.ggVisible=true;
				}
				else {
					me._model_load_spinner.style.visibility="hidden";
					me._model_load_spinner.ggVisible=false;
				}
			}
		}
		me._model_load_spinner.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._model_load_spinner);
		el=me._local_fonts=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		me._menu_left.logicBlock_visible();
		me._menu_left_slider.logicBlock_position();
		me._menu_left_slider.logicBlock_visible();
		me.elementMouseOver['share_btn']=false;
		me._share_btn.logicBlock_position();
		me._share_btn.logicBlock_alpha();
		me._share_btn.logicBlock_tabindex();
		me.elementMouseOver['info_btn']=false;
		me._info_btn.logicBlock_position();
		me._info_btn.logicBlock_alpha();
		me._info_btn.logicBlock_tabindex();
		me.elementMouseOver['back_btn']=false;
		me._back_btn.logicBlock_position();
		me._back_btn.logicBlock_alpha();
		me._back_btn.logicBlock_tabindex();
		me.elementMouseOver['floorplan_btn']=false;
		me._floorplan_btn.logicBlock_position();
		me._floorplan_btn.logicBlock_alpha();
		me._floorplan_btn.logicBlock_tabindex();
		me.elementMouseOver['map_btn']=false;
		me._map_btn.logicBlock_alpha();
		me._map_btn.logicBlock_tabindex();
		me.elementMouseOver['menu_left_icon_bg']=false;
		me._menu_left_icon_bg.logicBlock_tabindex();
		me._menu_left_icon.logicBlock_visible();
		me._menu_left_icon_active.logicBlock_visible();
		me._menu_center.logicBlock_visible();
		me._menu_center_slider.logicBlock_position();
		me._project_title.logicBlock_visible();
		me._thumbnail_menu.logicBlock_position();
		me._thumbnail_menu.logicBlock_size();
		me._thumbnail_menu.logicBlock_visible();
		me.elementMouseOver['thumbs_left']=false;
		me._thumbs_left.logicBlock_visible();
		me._thumbs_left.logicBlock_tabindex();
		me._thumbs_left.logicBlock_cssclasses();
		me._node_cloner.logicBlock_visible();
		me.elementMouseOver['thumbs_right']=false;
		me._thumbs_right.logicBlock_visible();
		me._thumbs_right.logicBlock_tabindex();
		me._thumbs_right.logicBlock_cssclasses();
		me.elementMouseOver['menu_center_button_bg']=false;
		me._menu_center_button_bg.logicBlock_tabindex();
		me._menu_center_icon.logicBlock_visible();
		me._menu_center_icon_active.logicBlock_visible();
		me._menu_right.logicBlock_visible();
		me._menu_right_slider.logicBlock_position();
		me._menu_right_slider.logicBlock_visible();
		me._toggle_gyro.logicBlock_position();
		me._toggle_gyro.logicBlock_alpha();
		me._toggle_gyro.logicBlock_tabindex();
		me.elementMouseOver['gyro_off']=false;
		me._gyro_off.logicBlock_visible();
		me.elementMouseOver['gyro_on']=false;
		me._gyro_on.logicBlock_visible();
		me.elementMouseOver['vr_btn']=false;
		me._vr_btn.logicBlock_position();
		me._vr_btn.logicBlock_alpha();
		me._vr_btn.logicBlock_tabindex();
		me._toggle_fullscreen.logicBlock_position();
		me._toggle_fullscreen.logicBlock_alpha();
		me._toggle_fullscreen.logicBlock_tabindex();
		me.elementMouseOver['fullscreen_off']=false;
		me._fullscreen_off.logicBlock_visible();
		me.elementMouseOver['fullscreen_on']=false;
		me._fullscreen_on.logicBlock_visible();
		me._toggle_audio.logicBlock_position();
		me._toggle_audio.logicBlock_alpha();
		me._toggle_audio.logicBlock_tabindex();
		me.elementMouseOver['audio_off']=false;
		me._audio_off.logicBlock_visible();
		me.elementMouseOver['audio_on']=false;
		me._audio_on.logicBlock_visible();
		me._toggle_hotspots.logicBlock_position();
		me._toggle_hotspots.logicBlock_alpha();
		me._toggle_hotspots.logicBlock_tabindex();
		me.elementMouseOver['show_hotspots']=false;
		me._show_hotspots.logicBlock_visible();
		me.elementMouseOver['hide_hotspots']=false;
		me._hide_hotspots.logicBlock_visible();
		me._toggle_autorotate.logicBlock_position();
		me._toggle_autorotate.logicBlock_alpha();
		me.elementMouseOver['autorotate_on']=false;
		me._autorotate_on.logicBlock_visible();
		me._autorotate_on.logicBlock_tabindex();
		me.elementMouseOver['autorotate_off']=false;
		me._autorotate_off.logicBlock_visible();
		me._autorotate_off.logicBlock_tabindex();
		me.elementMouseOver['languages_btn']=false;
		me._languages_btn.logicBlock_alpha();
		me.elementMouseOver['menu_right_icon_bg']=false;
		me._menu_right_icon_bg.logicBlock_tabindex();
		me._menu_right_icon.logicBlock_visible();
		me._menu_right_icon_active.logicBlock_visible();
		me._map.logicBlock_size();
		me._map.logicBlock_alpha();
		me._map_el.ggInitMap=function() {};
		me._map_el.ggInitMapMarkers=function() {};
		me._map_el.ggClearMap=function() {};
		me._map_el.logicBlock_position();
		me._map_el.logicBlock_size();
		me._map_el.logicBlock_visible();
		me._floorplan_el.ggInitMap=function() {};
		me._floorplan_el.ggInitMapMarkers=function() {};
		me._floorplan_el.ggClearMap=function() {};
		me._floorplan_el.logicBlock_position();
		me._floorplan_el.logicBlock_size();
		me._floorplan_el.logicBlock_visible();
		me._map_node_description.logicBlock_visible();
		me.elementMouseOver['map_top']=false;
		me._map_close_btn.logicBlock_visible();
		me._map_close_btn.logicBlock_tabindex();
		me._map_close_btn_active.logicBlock_visible();
		me._map_close_btn_active.logicBlock_tabindex();
		me._languages.logicBlock_position();
		me._languages.logicBlock_alpha();
		me.elementMouseOver['languages_top']=false;
		me._languages_close_btn.logicBlock_visible();
		me._languages_close_btn.logicBlock_tabindex();
		me._languages_close_btn_active.logicBlock_visible();
		me._languages_close_btn_active.logicBlock_tabindex();
		me._share.logicBlock_position();
		me._share.logicBlock_alpha();
		me.elementMouseOver['share_top']=false;
		me._share_close_btn.logicBlock_visible();
		me._share_close_btn.logicBlock_tabindex();
		me._share_close_btn_active.logicBlock_visible();
		me._share_close_btn_active.logicBlock_tabindex();
		me.elementMouseOver['facebook_btn']=false;
		me._facebook_btn.logicBlock_visible();
		me._facebook_btn.logicBlock_tabindex();
		me.elementMouseOver['twitter_btn']=false;
		me._twitter_btn.logicBlock_visible();
		me._twitter_btn.logicBlock_tabindex();
		me.elementMouseOver['copy_btn']=false;
		me._copy_btn.logicBlock_visible();
		me._copy_btn.logicBlock_tabindex();
		me._video_popup.logicBlock_size();
		me._video_popup.logicBlock_alpha();
		me._video_controller.logicBlock_visible();
		me.elementMouseOver['video_popup_top']=false;
		me._video_popup_close_btn.logicBlock_visible();
		me._video_popup_close_btn.logicBlock_tabindex();
		me._video_popup_close_btn_active.logicBlock_visible();
		me._video_popup_close_btn_active.logicBlock_tabindex();
		me._info_popup.logicBlock_alpha();
		me._info_popup_text.logicBlock_tabindex();
		me._info_popup_title.logicBlock_tabindex();
		me.elementMouseOver['info_popup_top']=false;
		me._info_popup_close_btn.logicBlock_visible();
		me._info_popup_close_btn.logicBlock_tabindex();
		me._info_popup_close_btn_active.logicBlock_visible();
		me._info_popup_close_btn_active.logicBlock_tabindex();
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me._sounds_off.logicBlock_tabindex();
		me.elementMouseOver['sounds_on']=false;
		me._sounds_on.logicBlock_tabindex();
		me._screentint_phone.logicBlock_alpha();
		me.elementMouseOver['close_popup_phone']=false;
		me._btn_close_popup_phone.logicBlock_visible();
		me._btn_close_popup_phone_active.logicBlock_visible();
		me._info_popup_text_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._map_el_phone.ggInitMap=function() {};
		me._map_el_phone.ggInitMapMarkers=function() {};
		me._map_el_phone.ggClearMap=function() {};
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggInitMap=function() {};
		me._floorplan_el_phone.ggInitMapMarkers=function() {};
		me._floorplan_el_phone.ggClearMap=function() {};
		me._floorplan_el_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		pano.on("modelloadstarted", () => { pano.setVariableValue("model_loading", true); });
pano.on("modelloaded", () => { pano.setVariableValue("model_loading", false); });
		me._model_load_spinner.logicBlock_size();
		me._model_load_spinner.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			me._variable_opt_info_available.logicBlock();
			me._thumbnail_menu.logicBlock_position();
			me._thumbnail_menu.logicBlock_size();
			me._info_popup.logicBlock_alpha();
		});
		player.addListener('autorotatechanged', function(event) {
			me._autorotate_on.logicBlock_visible();
			me._autorotate_off.logicBlock_visible();
		});
		player.addListener('beforechangenode', function(event) {
			player.setVariableValue('vis_info_popup', false);
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_opt_back_available.logicBlock();
			me._variable_opt_info_available.logicBlock();
			me._variable_opt_share.logicBlock();
			me._menu_left.logicBlock_visible();
			me._menu_left_slider.logicBlock_position();
			me._menu_left_slider.logicBlock_visible();
			me._share_btn.logicBlock_position();
			me._share_btn.logicBlock_alpha();
			me._share_btn.logicBlock_tabindex();
			me._info_btn.logicBlock_position();
			me._info_btn.logicBlock_alpha();
			me._info_btn.logicBlock_tabindex();
			me._back_btn.logicBlock_position();
			me._back_btn.logicBlock_alpha();
			me._back_btn.logicBlock_tabindex();
			me._floorplan_btn.logicBlock_position();
			me._floorplan_btn.logicBlock_alpha();
			me._floorplan_btn.logicBlock_tabindex();
			me._map_btn.logicBlock_alpha();
			me._map_btn.logicBlock_tabindex();
			me._menu_left_icon_bg.logicBlock_tabindex();
			me._menu_center.logicBlock_visible();
			me._menu_center_slider.logicBlock_position();
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_position();
			me._thumbnail_menu.logicBlock_size();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbs_left.logicBlock_visible();
			me._thumbs_left.logicBlock_tabindex();
			me._node_cloner.ggUpdateConditionNodeChange();
			me._thumbs_right.logicBlock_visible();
			me._thumbs_right.logicBlock_tabindex();
			me._menu_center_button_bg.logicBlock_tabindex();
			me._menu_right.logicBlock_visible();
			me._menu_right_slider.logicBlock_position();
			me._menu_right_slider.logicBlock_visible();
			me._toggle_gyro.logicBlock_position();
			me._toggle_gyro.logicBlock_alpha();
			me._toggle_gyro.logicBlock_tabindex();
			me._gyro_off.logicBlock_visible();
			me._gyro_on.logicBlock_visible();
			me._vr_btn.logicBlock_position();
			me._vr_btn.logicBlock_tabindex();
			me._toggle_fullscreen.logicBlock_position();
			me._toggle_fullscreen.logicBlock_alpha();
			me._toggle_fullscreen.logicBlock_tabindex();
			me._toggle_audio.logicBlock_position();
			me._toggle_audio.logicBlock_tabindex();
			me._audio_off.logicBlock_visible();
			me._audio_on.logicBlock_visible();
			me._toggle_hotspots.logicBlock_position();
			me._toggle_hotspots.logicBlock_alpha();
			me._toggle_hotspots.logicBlock_tabindex();
			me._show_hotspots.logicBlock_visible();
			me._hide_hotspots.logicBlock_visible();
			me._toggle_autorotate.logicBlock_alpha();
			me._autorotate_on.logicBlock_visible();
			me._autorotate_on.logicBlock_tabindex();
			me._autorotate_off.logicBlock_visible();
			me._autorotate_off.logicBlock_tabindex();
			me._menu_right_icon_bg.logicBlock_tabindex();
			me._map.logicBlock_size();
			me._map.logicBlock_alpha();
			me._map_el.logicBlock_position();
			me._map_el.logicBlock_size();
			me._map_el.logicBlock_visible();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._floorplan_el.logicBlock_visible();
			me._map_node_description.logicBlock_visible();
			me._map_close_btn.logicBlock_tabindex();
			me._map_close_btn_active.logicBlock_tabindex();
			me._languages.logicBlock_position();
			me._languages.logicBlock_alpha();
			me._languages_cloner.ggUpdateConditionNodeChange();
			me._languages_close_btn.logicBlock_tabindex();
			me._languages_close_btn_active.logicBlock_tabindex();
			me._share.logicBlock_position();
			me._share.logicBlock_alpha();
			me._share_close_btn.logicBlock_tabindex();
			me._share_close_btn_active.logicBlock_tabindex();
			me._facebook_btn.logicBlock_visible();
			me._facebook_btn.logicBlock_tabindex();
			me._twitter_btn.logicBlock_visible();
			me._twitter_btn.logicBlock_tabindex();
			me._copy_btn.logicBlock_visible();
			me._copy_btn.logicBlock_tabindex();
			me._video_popup.logicBlock_size();
			me._video_popup.logicBlock_alpha();
			me._video_controller.logicBlock_visible();
			me._video_controller_seekbar.ggConnectToMediaEl();
			me._video_popup_close_btn.logicBlock_tabindex();
			me._video_popup_close_btn_active.logicBlock_tabindex();
			me._info_popup.logicBlock_alpha();
			me._info_popup_text.logicBlock_tabindex();
			me._info_popup_title.logicBlock_tabindex();
			me._info_popup_close_btn.logicBlock_tabindex();
			me._info_popup_close_btn_active.logicBlock_tabindex();
			me._sounds_splashscreen.logicBlock_visible();
			me._sounds_off.logicBlock_tabindex();
			me._sounds_on.logicBlock_tabindex();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_text_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._model_load_spinner.logicBlock_size();
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_opt_back_available.logicBlock();
			me._variable_opt_info_available.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			if (player.transitionsDisabled) {
				me._menu_left.style.transition='none';
			} else {
				me._menu_left.style.transition='all 500ms ease-out 500ms';
			}
			me._menu_left.style.opacity='1';
			me._menu_left.style.visibility=me._menu_left.ggVisible?'inherit':'hidden';
			me._menu_left.logicBlock_visible();
			me._menu_left_slider.logicBlock_position();
			me._menu_left_slider.logicBlock_visible();
			me._share_btn.logicBlock_position();
			me._share_btn.logicBlock_alpha();
			me._share_btn.logicBlock_tabindex();
			me._info_btn.logicBlock_position();
			me._info_btn.logicBlock_alpha();
			me._info_btn.logicBlock_tabindex();
			me._back_btn.logicBlock_position();
			me._back_btn.logicBlock_alpha();
			me._back_btn.logicBlock_tabindex();
			me._floorplan_btn.logicBlock_position();
			me._floorplan_btn.logicBlock_alpha();
			me._floorplan_btn.logicBlock_tabindex();
			me._map_btn.logicBlock_alpha();
			me._map_btn.logicBlock_tabindex();
			me._menu_left_icon_bg.logicBlock_tabindex();
			if (player.transitionsDisabled) {
				me._menu_center.style.transition='none';
			} else {
				me._menu_center.style.transition='all 500ms ease-out 500ms';
			}
			me._menu_center.style.opacity='1';
			me._menu_center.style.visibility=me._menu_center.ggVisible?'inherit':'hidden';
			if (
				(
					((player.getVariableValue('vis_menu_center') == true))
				)
			) {
				me._thumbnail_menu.style.transition='none';
				me._thumbnail_menu.style.opacity='1';
				me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
			}
			me._menu_center.logicBlock_visible();
			me._menu_center_slider.logicBlock_position();
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_position();
			me._thumbnail_menu.logicBlock_size();
			me._thumbnail_menu.logicBlock_visible();
			me._thumbs_left.logicBlock_visible();
			me._thumbs_left.logicBlock_tabindex();
			me._thumbs_left.logicBlock_cssclasses();
			me._node_cloner.logicBlock_visible();
			me._thumbs_right.logicBlock_visible();
			me._thumbs_right.logicBlock_tabindex();
			me._thumbs_right.logicBlock_cssclasses();
			me._menu_center_button_bg.logicBlock_tabindex();
			if (player.transitionsDisabled) {
				me._menu_right.style.transition='none';
			} else {
				me._menu_right.style.transition='all 500ms ease-out 500ms';
			}
			me._menu_right.style.opacity='1';
			me._menu_right.style.visibility=me._menu_right.ggVisible?'inherit':'hidden';
			me._menu_right.logicBlock_visible();
			me._menu_right_slider.logicBlock_position();
			me._menu_right_slider.logicBlock_visible();
			me._toggle_gyro.logicBlock_position();
			me._toggle_gyro.logicBlock_alpha();
			me._toggle_gyro.logicBlock_tabindex();
			me._vr_btn.logicBlock_position();
			me._vr_btn.logicBlock_tabindex();
			me._toggle_fullscreen.logicBlock_position();
			me._toggle_fullscreen.logicBlock_alpha();
			me._toggle_fullscreen.logicBlock_tabindex();
			me._toggle_audio.logicBlock_position();
			me._toggle_audio.logicBlock_alpha();
			me._toggle_audio.logicBlock_tabindex();
			me._audio_off.logicBlock_visible();
			me._audio_on.logicBlock_visible();
			me._toggle_hotspots.logicBlock_position();
			me._toggle_hotspots.logicBlock_alpha();
			me._toggle_hotspots.logicBlock_tabindex();
			me._show_hotspots.logicBlock_visible();
			me._hide_hotspots.logicBlock_visible();
			me._toggle_autorotate.logicBlock_position();
			me._toggle_autorotate.logicBlock_alpha();
			me._autorotate_on.logicBlock_tabindex();
			me._autorotate_off.logicBlock_tabindex();
			me._languages_btn.logicBlock_alpha();
			me._menu_right_icon_bg.logicBlock_tabindex();
			me._map.logicBlock_size();
			me._map.logicBlock_alpha();
			me._map_el.logicBlock_position();
			me._map_el.logicBlock_size();
			me._map_el.logicBlock_visible();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._floorplan_el.logicBlock_visible();
			me._map_node_description.logicBlock_visible();
			me._map_close_btn.logicBlock_tabindex();
			me._map_close_btn_active.logicBlock_tabindex();
			me._languages.logicBlock_position();
			me._languages.logicBlock_alpha();
			me._languages_scroller.ggUpdatePosition();
			me._languages_cloner.ggTranslations = player.getProjectTranslations();
			me._languages_cloner.ggUpdate();
			me._languages_close_btn.logicBlock_tabindex();
			me._languages_close_btn_active.logicBlock_tabindex();
			if (
				(
					((player.getVariableValue('opt_share_facebook') == true))
				)
			) {
				player.setVariableValue('width_share_container', player.getVariableValue('width_share_container') + Number("36.00"));
			}
			if (
				(
					((player.getVariableValue('opt_share_twitter') == true)) && 
					((player.getVariableValue('opt_share_facebook') == true))
				)
			) {
				player.setVariableValue('width_share_container', player.getVariableValue('width_share_container') + Number("24.00"));
			}
			me._twitter_btn.style.transition='none';
			me._twitter_btn.ggParameter.rx=player.getVariableValue('width_share_container', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._twitter_btn.ggParameter.ry=0;
			me._twitter_btn.style.transform=parameterToTransform(me._twitter_btn.ggParameter);
			if (
				(
					((player.getVariableValue('opt_share_twitter') == true))
				)
			) {
				player.setVariableValue('width_share_container', player.getVariableValue('width_share_container') + Number("36.00"));
			}
			if (
				(
					((player.getVariableValue('opt_share_copy') == true)) && 
					((player.getVariableValue('opt_share_twitter') == true)) || 
					((player.getVariableValue('opt_share_facebook') == true))
				)
			) {
				player.setVariableValue('width_share_container', player.getVariableValue('width_share_container') + Number("24.00"));
			}
			me._copy_btn.style.transition='none';
			me._copy_btn.ggParameter.rx=player.getVariableValue('width_share_container', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._copy_btn.ggParameter.ry=0;
			me._copy_btn.style.transform=parameterToTransform(me._copy_btn.ggParameter);
			if (
				(
					((player.getVariableValue('opt_share_copy') == true))
				)
			) {
				player.setVariableValue('width_share_container', player.getVariableValue('width_share_container') + Number("36.00"));
			}
			me._share_container.style.transition='none';
			me._share_container.style.width = '' + player.getVariableValue('width_share_container', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
			me._share_container.style.left = 'calc(50% - (' + player.getVariableValue('width_share_container', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px / 2))';
			me._share_container.style.height = '36px';
			me._share_container.style.top = 'calc(50% - (36px / 2) - (0px / 2) + 20px)';
			me._share_container.ggUpdatePosition();
			skin.updateSize(me._share_container);
			me._share.logicBlock_position();
			me._share.logicBlock_alpha();
			me._share_close_btn.logicBlock_tabindex();
			me._share_close_btn_active.logicBlock_tabindex();
			me._facebook_btn.logicBlock_visible();
			me._facebook_btn.logicBlock_tabindex();
			me._twitter_btn.logicBlock_visible();
			me._twitter_btn.logicBlock_tabindex();
			me._copy_btn.logicBlock_visible();
			me._copy_btn.logicBlock_tabindex();
			me._video_popup.logicBlock_size();
			me._video_popup.logicBlock_alpha();
			me._video_controller.logicBlock_visible();
			me._video_popup_close_btn.logicBlock_tabindex();
			me._video_popup_close_btn_active.logicBlock_tabindex();
			me._info_popup.logicBlock_alpha();
			me._info_popup_text.logicBlock_tabindex();
			me._info_popup_title.logicBlock_tabindex();
			me._info_popup_close_btn.logicBlock_tabindex();
			me._info_popup_close_btn_active.logicBlock_tabindex();
			me._sounds_splashscreen.logicBlock_visible();
			me._sounds_off.logicBlock_tabindex();
			me._sounds_on.logicBlock_tabindex();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_text_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._model_load_spinner.logicBlock_size();
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._fullscreen_off.logicBlock_visible();
			me._fullscreen_on.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._fullscreen_off.logicBlock_visible();
			me._fullscreen_on.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._menu_right_slider.logicBlock_position();
			me._toggle_gyro.logicBlock_alpha();
		});
		player.addListener('gyrochanged', function(event) {
			me._gyro_off.logicBlock_visible();
			me._gyro_on.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._menu_right_slider.logicBlock_position();
			me._toggle_gyro.logicBlock_position();
			me._vr_btn.logicBlock_position();
			me._toggle_fullscreen.logicBlock_alpha();
		});
		player.addListener('varchanged_kb_accessibility', function(event) {
			for(var i = 0; i < me._node_cloner.ggInstances.length; i++) {
				me._node_cloner.ggInstances[i].ggEvent_varchanged_kb_accessibility(event);
			}
			me._share_btn.logicBlock_tabindex();
			me._info_btn.logicBlock_tabindex();
			me._back_btn.logicBlock_tabindex();
			me._floorplan_btn.logicBlock_tabindex();
			me._map_btn.logicBlock_tabindex();
			me._menu_left_icon_bg.logicBlock_tabindex();
			me._thumbs_left.logicBlock_tabindex();
			me._thumbs_right.logicBlock_tabindex();
			me._menu_center_button_bg.logicBlock_tabindex();
			me._toggle_gyro.logicBlock_tabindex();
			me._vr_btn.logicBlock_tabindex();
			me._toggle_fullscreen.logicBlock_tabindex();
			me._toggle_audio.logicBlock_tabindex();
			me._toggle_hotspots.logicBlock_tabindex();
			me._autorotate_on.logicBlock_tabindex();
			me._autorotate_off.logicBlock_tabindex();
			me._menu_right_icon_bg.logicBlock_tabindex();
			me._map_close_btn.logicBlock_tabindex();
			me._map_close_btn_active.logicBlock_tabindex();
			me._languages_close_btn.logicBlock_tabindex();
			me._languages_close_btn_active.logicBlock_tabindex();
			me._share_close_btn.logicBlock_tabindex();
			me._share_close_btn_active.logicBlock_tabindex();
			me._facebook_btn.logicBlock_tabindex();
			me._twitter_btn.logicBlock_tabindex();
			me._copy_btn.logicBlock_tabindex();
			me._video_popup_close_btn.logicBlock_tabindex();
			me._video_popup_close_btn_active.logicBlock_tabindex();
			me._info_popup_text.logicBlock_tabindex();
			me._info_popup_title.logicBlock_tabindex();
			me._info_popup_close_btn.logicBlock_tabindex();
			me._info_popup_close_btn_active.logicBlock_tabindex();
			me._sounds_off.logicBlock_tabindex();
			me._sounds_on.logicBlock_tabindex();
		});
		player.addListener('varchanged_model_loading', function(event) {
			me._model_load_spinner.logicBlock_visible();
		});
		player.addListener('varchanged_node_cloner_hasDown', function(event) {
			me._thumbs_left.logicBlock_visible();
		});
		player.addListener('varchanged_node_cloner_hasUp', function(event) {
			me._thumbs_right.logicBlock_visible();
		});
		player.addListener('varchanged_opt_auto_rot', function(event) {
			me._menu_right_slider.logicBlock_position();
			me._toggle_gyro.logicBlock_position();
			me._vr_btn.logicBlock_position();
			me._toggle_fullscreen.logicBlock_position();
			me._toggle_audio.logicBlock_position();
			me._toggle_hotspots.logicBlock_position();
			me._toggle_autorotate.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_back', function(event) {
			me._variable_opt_back_available.logicBlock();
		});
		player.addListener('varchanged_opt_back_available', function(event) {
			me._menu_left.logicBlock_visible();
			me._menu_left_slider.logicBlock_position();
			me._share_btn.logicBlock_position();
			me._info_btn.logicBlock_position();
			me._back_btn.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_desc_in_maps', function(event) {
			me._map_el.logicBlock_position();
			me._map_el.logicBlock_size();
			me._floorplan_el.logicBlock_position();
			me._floorplan_el.logicBlock_size();
			me._map_node_description.logicBlock_visible();
		});
		player.addListener('varchanged_opt_floorplans', function(event) {
			me._menu_left.logicBlock_visible();
			me._menu_left_slider.logicBlock_position();
			me._share_btn.logicBlock_position();
			me._info_btn.logicBlock_position();
			me._back_btn.logicBlock_position();
			me._floorplan_btn.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._menu_right_slider.logicBlock_position();
			me._toggle_gyro.logicBlock_position();
			me._vr_btn.logicBlock_position();
			me._toggle_fullscreen.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._menu_right_slider.logicBlock_position();
			me._toggle_gyro.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._variable_opt_info_available.logicBlock();
		});
		player.addListener('varchanged_opt_info_available', function(event) {
			me._menu_left.logicBlock_visible();
			me._menu_left_slider.logicBlock_position();
			me._share_btn.logicBlock_position();
			me._info_btn.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_maps', function(event) {
			me._menu_left.logicBlock_visible();
			me._menu_left_slider.logicBlock_position();
			me._share_btn.logicBlock_position();
			me._info_btn.logicBlock_position();
			me._back_btn.logicBlock_position();
			me._floorplan_btn.logicBlock_position();
			me._map_btn.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_proj_title', function(event) {
			me._project_title.logicBlock_visible();
			me._thumbnail_menu.logicBlock_position();
			me._thumbnail_menu.logicBlock_size();
		});
		player.addListener('varchanged_opt_share', function(event) {
			me._menu_left.logicBlock_visible();
			me._menu_left_slider.logicBlock_position();
			me._share_btn.logicBlock_alpha();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
			me._copy_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
			me._facebook_btn.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
			me._twitter_btn.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._menu_center_slider.logicBlock_position();
			me._thumbnail_menu.logicBlock_visible();
			me._model_load_spinner.logicBlock_size();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._audio_off.logicBlock_visible();
			me._audio_on.logicBlock_visible();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._map.logicBlock_alpha();
			me._floorplan_el.logicBlock_visible();
		});
		player.addListener('varchanged_vis_hotspots', function(event) {
			me._show_hotspots.logicBlock_visible();
			me._hide_hotspots.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._info_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			me._info_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_languages', function(event) {
			me._languages.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._map.logicBlock_alpha();
			me._map_el.logicBlock_visible();
		});
		player.addListener('varchanged_vis_menu_center', function(event) {
			if (
				(
					((player.getVariableValue('vis_menu_center') == true))
				)
			) {
				if (player.transitionsDisabled) {
					me._thumbnail_menu.style.transition='none';
				} else {
					me._thumbnail_menu.style.transition='all 500ms ease-in-out 700ms';
				}
				me._thumbnail_menu.style.opacity='1';
				me._thumbnail_menu.style.visibility=me._thumbnail_menu.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((player.getVariableValue('vis_menu_center') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._thumbnail_menu.style.transition='none';
				} else {
					me._thumbnail_menu.style.transition='all 200ms ease-in-out 0ms';
				}
				me._thumbnail_menu.style.opacity='0';
				me._thumbnail_menu.style.visibility='hidden';
			}
			me._menu_center_slider.logicBlock_position();
			me._map.logicBlock_size();
			me._video_popup.logicBlock_size();
		});
		player.addListener('varchanged_vis_menu_left', function(event) {
			me._menu_left_slider.logicBlock_position();
			me._share_btn.logicBlock_tabindex();
			me._info_btn.logicBlock_tabindex();
			me._back_btn.logicBlock_tabindex();
			me._floorplan_btn.logicBlock_tabindex();
			me._map_btn.logicBlock_tabindex();
		});
		player.addListener('varchanged_vis_menu_right', function(event) {
			me._menu_right_slider.logicBlock_position();
			me._toggle_gyro.logicBlock_tabindex();
			me._vr_btn.logicBlock_tabindex();
			me._toggle_fullscreen.logicBlock_tabindex();
			me._toggle_audio.logicBlock_tabindex();
			me._toggle_hotspots.logicBlock_tabindex();
			me._autorotate_on.logicBlock_tabindex();
			me._autorotate_off.logicBlock_tabindex();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._info_popup_text_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_languages', function(event) {
			me._variable_vis_skin.logicBlock();
			me._languages.logicBlock_position();
			me._languages.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_share', function(event) {
			me._variable_vis_skin.logicBlock();
			me._share.logicBlock_position();
			me._share.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._thumbnail_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
			me._video_controller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._variable_vis_skin.logicBlock();
			me._screentint_phone.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_share', function(event) {
			me._share.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			me._menu_left.logicBlock_visible();
			me._menu_left_slider.logicBlock_visible();
			me._menu_center.logicBlock_visible();
			me._menu_right.logicBlock_visible();
			me._menu_right_slider.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_file', function(event) {
			me._video_controller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_popup', function(event) {
			me._video_popup.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_video_url', function(event) {
			me._video_controller.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._node_cloner.ggUpdate();
			me._languages_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._menu_right_slider.logicBlock_position();
			me._toggle_gyro.logicBlock_position();
			me._vr_btn.logicBlock_alpha();
		});
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_thumb_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumb_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_thumb_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 120px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_thumb_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_thumb_phone.onclick=function (e) {
			if (me._node_thumb_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_thumbs', false);
		}
		me._node_thumb_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_img_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img_phone";
		el.ggDx=0;
		el.ggDy=-13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) - 13px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._thumb_img_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img_phone.onmouseenter=function (e) {
			me.elementMouseOver['thumb_img_phone']=true;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.onmouseleave=function (e) {
			me.elementMouseOver['thumb_img_phone']=false;
			me._thumb_img_border_phone.logicBlock_alpha();
		}
		me._thumb_img_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_border_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_img_border_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumb_img_border_phone";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 98px;';
		hs+='left : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_border_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._thumb_img_phone.ggNodeId;
		}
		me._thumb_img_border_phone.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumb_img_phone'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumb_img_border_phone.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumb_img_border_phone.style.transition='opacity 200ms ease 0ms';
				if (me._thumb_img_border_phone.ggCurrentLogicStateAlpha == 0) {
					me._thumb_img_border_phone.style.visibility=me._thumb_img_border_phone.ggVisible?'inherit':'hidden';
					me._thumb_img_border_phone.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumb_img_border_phone.style.opacity == 0.0) { me._thumb_img_border_phone.style.visibility="hidden"; } }, 205);
					me._thumb_img_border_phone.style.opacity=0;
				}
			}
		}
		me._thumb_img_border_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_img_phone.appendChild(me._thumb_img_border_phone);
		me._node_thumb_phone.appendChild(me._thumb_img_phone);
		el=me._thumb_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumb_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumb_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((110px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 110px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title_phone.ggUpdateText();
		el.appendChild(els);
		me._thumb_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._thumb_title_phone.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.nodeVisited(me._thumb_title_phone.ggElementNodeId()) == true)) || 
				((me._thumb_title_phone.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._thumb_title_phone.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._thumb_title_phone.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._thumb_title_phone.style.transition='color 0s';
				if (me._thumb_title_phone.ggCurrentLogicStateTextColor == 0) {
					me._thumb_title_phone.style.color="rgba(79,181,194,1)";
				}
				else {
					me._thumb_title_phone.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._thumb_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb_phone.appendChild(me._thumb_title_phone);
		me.__div.appendChild(me._node_thumb_phone);
		me.elementMouseOver['thumb_img_phone']=false;
		me._thumb_img_border_phone.logicBlock_alpha();
		me._thumb_title_phone.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
				me._thumb_title_phone.logicBlock_textcolor();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumb_title_phone.logicBlock_textcolor();
			};
	};
	function SkinCloner_languages_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._language_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._language_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._language_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="language_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._language_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._language_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._language_title.ggUpdateText();
		});
		el.appendChild(els);
		me._language_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._language_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((me.elementMouseOver['language_title'] == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._language_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._language_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._language_title.style.transition='color 0s';
				if (me._language_title.ggCurrentLogicStateTextColor == 0) {
					me._language_title.style.color="rgba(79,181,194,1)";
				}
				else {
					me._language_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._language_title.onclick=function (e) {
			if (me._language_title.isDragging()) return;
			player.setLanguage(me.ggTag);
			player.setVariableValue('vis_languages', false);
			player.setVariableValue('vis_phone_languages', false);
		}
		me._language_title.onmouseenter=function (e) {
			me.elementMouseOver['language_title']=true;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.onmouseleave=function (e) {
			me.elementMouseOver['language_title']=false;
			me._language_title.logicBlock_textcolor();
		}
		me._language_title.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._language_title);
		me.elementMouseOver['language_title']=false;
		me._language_title.logicBlock_textcolor();
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=388;
		el.ggDy=-213;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle gradient";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='background : #4fb5c2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 388px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) - 213px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin.style.transition='transform 200ms ease 0ms';
				if (me._map_pin.ggCurrentLogicStateScaling == 0) {
					me._map_pin.ggParameter.sx = 1.3;
					me._map_pin.ggParameter.sy = 1.3;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin);}, 250);
				}
				else {
					me._map_pin.ggParameter.sx = 1;
					me._map_pin.ggParameter.sy = 1;
					me._map_pin.style.transform=parameterToTransform(me._map_pin.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin);}, 250);
				}
			}
		}
		me._map_pin.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._map_pin.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._map_pin.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._map_pin.style.transition='transform 200ms ease 0ms';
				if (me._map_pin.ggCurrentLogicStateTabIndex == 0) {
					me._map_pin.setAttribute('tabindex', '-1');
				}
				else {
					me._map_pin.setAttribute('tabindex', '0');
				}
			}
		}
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_floorplan', false);
		}
		me._map_pin.onmouseenter=function (e) {
				skin._map_node_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._map_node_title.ggUpdateText();
			skin._map_node_title.ggTextDiv.scrollTop = 0;
				skin._map_node_description.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.ggUserdata.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._map_node_description.ggUpdateText();
			skin._map_node_description.ggTextDiv.scrollTop = 0;
			me.elementMouseOver['map_pin']=true;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
			me._map_pin.logicBlock_scaling();
		}
		me._map_pin.onmouseleave=function (e) {
			skin._reset_info.onclick.call(skin._reset_info);
			me.elementMouseOver['map_pin']=false;
			me._map_pin_icon.logicBlock_visible();
			me._map_pin_icon_active.logicBlock_visible();
			me._map_pin.logicBlock_scaling();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_icon=document.createElement('div');
		els=me._map_pin_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLW1hcC1waW4iIGZpbGw9Im5vbmUiIGhlaWdodD0iMzIiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIxIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxwYXRoIGQ9Ik0yMSAxMGMwIDctOSAxMy05IDEzcy05LTYtOS0xM2E5IDkgMCAwIDEgMTggMHoiLz4KIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiLz4KPC9zdmc+Cg==';
		me._map_pin_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin_icon.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon.style.transition='';
				if (me._map_pin_icon.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon.style.visibility="hidden";
					me._map_pin_icon.ggVisible=false;
				}
				else {
					me._map_pin_icon.style.visibility=(Number(me._map_pin_icon.style.opacity)>0||!me._map_pin_icon.style.opacity)?'inherit':'hidden';
					me._map_pin_icon.ggVisible=true;
				}
			}
		}
		me._map_pin_icon.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon);
		el=me._map_pin_icon_active=document.createElement('div');
		els=me._map_pin_icon_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzMiAzMjsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDMyIDMyIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4zMzMzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo1LjMzMzM7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjgsMTMuM2MwLDkuMy0xMiwxNy4zLTEyLDE3LjNzLTEyLTgtMTItMTcuM2MwLTYuNiw1LjQtMTIsMTItMTJTMjgsNi43LDI4LDEzLjN6Ii8+CiA8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxNiIgY3k9IjEzLjMiIHI9IjQiLz4KPC9zdmc+Cg==';
		me._map_pin_icon_active__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_icon_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		el.userData=el;
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 20px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_icon_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin_icon_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['map_pin'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_icon_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_icon_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_icon_active.style.transition='';
				if (me._map_pin_icon_active.ggCurrentLogicStateVisible == 0) {
					me._map_pin_icon_active.style.visibility=(Number(me._map_pin_icon_active.style.opacity)>0||!me._map_pin_icon_active.style.opacity)?'inherit':'hidden';
					me._map_pin_icon_active.ggVisible=true;
				}
				else {
					me._map_pin_icon_active.style.visibility="hidden";
					me._map_pin_icon_active.ggVisible=false;
				}
			}
		}
		me._map_pin_icon_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_icon_active);
		me.elementMouseOver['map_pin']=false;
		me._map_pin.logicBlock_scaling();
		me._map_pin.logicBlock_tabindex();
		me._map_pin_icon.logicBlock_visible();
		me._map_pin_icon_active.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._map_pin.logicBlock_tabindex();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin.logicBlock_tabindex();
			};
			me.ggEvent_varchanged_kb_accessibility=function() {
				me._map_pin.logicBlock_tabindex();
			};
	};
	function SkinCloner_node_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_thumb=document.createElement('div');
		el.ggId="node_thumb";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		el.userData=el;
		hs ='';
		hs+='height : 130px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '0');
		el.style.transformOrigin='50% 50%';
		me._node_thumb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._node_thumb.logicBlock_tabindex = function() {
			var newLogicStateTabIndex;
			if (
				((player.getVariableValue('kb_accessibility') == false))
			)
			{
				newLogicStateTabIndex = 0;
			}
			else {
				newLogicStateTabIndex = -1;
			}
			if (me._node_thumb.ggCurrentLogicStateTabIndex != newLogicStateTabIndex) {
				me._node_thumb.ggCurrentLogicStateTabIndex = newLogicStateTabIndex;
				me._node_thumb.style.transition='';
				if (me._node_thumb.ggCurrentLogicStateTabIndex == 0) {
					me._node_thumb.setAttribute('tabindex', '-1');
				}
				else {
					me._node_thumb.setAttribute('tabindex', '0');
				}
			}
		}
		me._node_thumb.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._node_thumb.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img=document.createElement('div');
		els=me._thumb_img__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/thumb_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 50px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumb_img";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		el.userData=el;
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumb_img.onmouseenter=function (e) {
			me.elementMouseOver['thumb_img']=true;
			me._thumb_img_border.logicBlock_alpha();
		}
		me._thumb_img.onmouseleave=function (e) {
			me.elementMouseOver['thumb_img']=false;
			me._thumb_img_border.logicBlock_alpha();
		}
		me._thumb_img.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumb_img_border=document.createElement('div');
		el.ggId="thumb_img_border";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		el.userData=el;
		hs ='';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 50px;';
		hs+='cursor : pointer;';
		hs+='height : 98px;';
		hs+='left : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((98px + 4px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 98px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumb_img_border.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me._thumb_img.ggNodeId;
		}
		me._thumb_img_border.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumb_img'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumb_img_border.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumb_img_border.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumb_img_border.style.transition='opacity 200ms ease 0ms';
				if (me._thumb_img_border.ggCurrentLogicStateAlpha == 0) {
					me._thumb_img_border.style.visibility=me._thumb_img_border.ggVisible?'inherit':'hidden';
					me._thumb_img_border.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumb_img_border.style.opacity == 0.0) { me._thumb_img_border.style.visibility="hidden"; } }, 205);
					me._thumb_img_border.style.opacity=0;
				}
			}
		}
		me._thumb_img_border.ggUpdatePosition=function (useTransition) {
		}
		me._thumb_img.appendChild(me._thumb_img_border);
		me._node_thumb.appendChild(me._thumb_img);
		el=me._thumb_title=document.createElement('div');
		els=me._thumb_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumb_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text montserrat_regular";
		el.ggType='text';
		el.userData=el;
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs='';
		hs+='box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._thumb_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumb_title.ggUpdateText();
		el.appendChild(els);
		me._thumb_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._thumb_title.logicBlock_textcolor = function() {
			var newLogicStateTextColor;
			if (
				((player.nodeVisited(me._thumb_title.ggElementNodeId()) == true)) || 
				((me._thumb_title.ggIsActive() == true))
			)
			{
				newLogicStateTextColor = 0;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._thumb_title.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._thumb_title.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._thumb_title.style.transition='color 0s';
				if (me._thumb_title.ggCurrentLogicStateTextColor == 0) {
					me._thumb_title.style.color="rgba(79,181,194,1)";
				}
				else {
					me._thumb_title.style.color="rgba(255,255,255,1)";
				}
			}
		}
		me._thumb_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumb.appendChild(me._thumb_title);
		me.__div.appendChild(me._node_thumb);
		me._node_thumb.logicBlock_tabindex();
		me.elementMouseOver['thumb_img']=false;
		me._thumb_img_border.logicBlock_alpha();
		me._thumb_title.logicBlock_textcolor();
			me.ggEvent_changenode=function(event) {
				me._node_thumb.logicBlock_tabindex();
				me._thumb_title.logicBlock_textcolor();
				me._thumb_title.logicBlock_textcolor();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumb_title.logicBlock_textcolor();
			};
			me.ggEvent_configloaded=function(event) {
				me._node_thumb.logicBlock_tabindex();
			};
			me.ggEvent_varchanged_kb_accessibility=function(event) {
				me._node_thumb.logicBlock_tabindex();
			};
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._key_up.ggUpdateConditionTimer();
		me._key_down.ggUpdateConditionTimer();
		me._key_left.ggUpdateConditionTimer();
		me._key_right.ggUpdateConditionTimer();
		me._key_s.ggUpdateConditionTimer();
		me._key_a.ggUpdateConditionTimer();
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressedText) {
				case 'arrowleft':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changePanLog(0.3,true);
}
					break;
				case 'arrowup':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changeTiltLog(0.3,true);
}
					break;
				case 'arrowright':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changePanLog(-0.3,true);
}
					break;
				case 'arrowdown':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changeTiltLog(-0.3,true);
}
					break;
				case 'a':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changeFovLog(-0.3,true);
}
					break;
				case 's':
					if (
	(
		((player.getVariableValue('kb_accessibility') == true))
	)
) {
	player.changeFovLog(0.3,true);
}
					break;
			}
		}
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggdefaulthotspot { font-family: "Montserrat", sans-serif; font-weight: 400; font-size: 16px; -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggmarkdown a { color: #aaa; } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .montserrat_light { font-family: "Montserrat", sans-serif; font-weight: 300; } .montserrat_regular { font-family: "Montserrat", sans-serif; font-weight: 400; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px black); filter: drop-shadow( 0px 0px 3px black); } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 300; src: local(""), url("$(skinbase)fonts/montserrat-latin-300.woff2") format("woff2"); } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/montserrat-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Montserrat"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/montserrat-latin-600.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keydown', function(e) {
		var keyText = e.key.toLowerCase();
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = e.keyCode;
		me.skinKeyPressedText = e.key.toLowerCase();
	});
	document.addEventListener('keyup', function(e) {
		var keyText = e.key.toLowerCase();
		var keyCode = e.which || e.keyCode;
		me.skinKeyPressedKey = 0;
		me.skinKeyPressedText = '';
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		if (me.fontsLoaded < 3) {
			me.updateSize(me.divSkin);
			me.fontsLoaded++;
		}
	}
};