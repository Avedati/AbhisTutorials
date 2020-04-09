function initSplitDataCanvas(canvas, data_radius, data_add_function_1, data_add_function_2, line_enlarge_function) {
	var context = canvas.getContext('2d');
	var data_color_1 = 'red', data_color_2 = 'lightblue';
	var num_data = 20;

	context.fillStyle = '#272727';
	context.fillRect(0, 0, canvas.width, canvas.height);

	for(var i=0;i<num_data/2;i++) {
		var datum_1 = data_add_function_1();
		context.fillStyle = data_color_1;
		context.beginPath();
		context.arc(datum_1[0], datum_1[1], data_radius, 0, 2 * Math.PI);
		context.closePath();
		context.fill();

		var datum_2 = data_add_function_2();
		context.fillStyle = data_color_2;
		context.beginPath();
		context.arc(datum_2[0], datum_2[1], data_radius, 0, 2 * Math.PI);
		context.closePath();
		context.fill();
	}

	canvas.onclick = function() {
		var line_x_1 = canvas.width / 2;
		var line_y_1 = canvas.height / 2;
		var line_x_2 = canvas.width / 2;
		var line_y_2 = canvas.height / 2;

		var interval = setInterval(function() {
			context.strokeStyle = '#272727';
			context.beginPath();
			context.moveTo(line_x_1, line_y_1);
			context.lineTo(line_x_2, line_y_2);
			context.stroke();

			var res = line_enlarge_function(line_x_1, line_y_1, line_x_2, line_y_2);
			line_x_1 = res[0];
			line_y_1 = res[1];
			line_x_2 = res[2];
			line_y_2 = res[3];

			context.strokeStyle = 'white';
			context.beginPath();
			context.moveTo(line_x_1, line_y_1);
			context.lineTo(line_x_2, line_y_2);
			context.stroke();

			if(Math.abs(line_x_1 - line_x_2) >= canvas.width * 7 / 8 ||
				 Math.abs(line_y_1 - line_y_2) >= canvas.height * 7 / 8) {
				clearInterval(interval);
			}
		}, 10);
	}

	return canvas;
}

window.onload = function() {
	if(window.location.hash) {
		if(window.location.hash === '#aicourse') {
			console.log('we got here! (aicourse)');
			document.getElementById('go').click();
			document.getElementById('neural-networks').click();
		}
		else if(window.location.hash === '#gamedesigncourse') {
			console.log('we got here! (gamedesigncourse)');
			document.getElementById('go').click();
			document.getElementById('game-design').click();
		}
		else if(window.location.hash === 'assemblylanguagecourse') {
			document.getElementById('go').click();
			document.getElementById('assembly-language').click();
		}
		else if(['physics','economics','ela','whistory'].map(function(v) { return '#' + v + 'resources'; })
			.includes(window.location.hash)) {
			document.getElementById('go').click();
			document.getElementById(window.location.hash.substring(1,window.location.hash.length - 9)).click();
		}
	}
	
	document.getElementById('go').onclick = function() {
		document.getElementById('home').classList.remove('active');
		document.getElementById('tutorials').classList.add('active');
	};

	document.getElementById('neural-networks').onclick = function() {
		document.getElementById('tutorials').classList.remove('active');
		document.getElementById('neural-networks-content').classList.add('active');
		window.location.hash = '#aicourse';
	};

	document.getElementById('game-design').onclick = function() {
		document.getElementById('tutorials').classList.remove('active');
		document.getElementById('game-design-content').classList.add('active');
		window.location.hash = '#gamedesigncourse';
	};

	document.getElementById('assembly-language').onclick = function() {
		document.getElementById('tutorials').classList.remove('active');
		document.getElementById('assembly-language-content').classList.add('active');
		window.location.hash = '#assemblylanguagecourse';
	};

	document.getElementById('physics').onclick = function() {
		document.getElementById('tutorials').classList.remove('active');
		document.getElementById('physics-content').classList.add('active');
		window.location.hash = '#physicsresources';
	};

	document.getElementById('economics').onclick = function() {
		document.getElementById('tutorials').classList.remove('active');
		document.getElementById('economics-content').classList.add('active');
		window.location.hash = '#economicsresources';
	};

	document.getElementById('ela').onclick = function() {
		document.getElementById('tutorials').classList.remove('active');
		document.getElementById('ela-content').classList.add('active');
		window.location.hash = '#elaresources';
	};

	document.getElementById('whistory').onclick = function() {
		document.getElementById('tutorials').classList.remove('active');
		document.getElementById('whistory-content').classList.add('active');
		window.location.hash = '#whistoryresources';
	};

	[...document.getElementsByClassName('back')].forEach(function(v) {
		v.onclick = function() {
			[...document.getElementsByClassName('active')].forEach(function(w) { w.classList.remove('active'); });
			document.getElementById('tutorials').classList.add('active');
		};
	});

	[...document.getElementsByTagName('textarea')].forEach(function(v) {
		v.onkeydown = function(ev) {
			if(ev.keyCode === 9) {
				ev.preventDefault();
				var start = this.selectionStart;
				this.value = this.value.substring(0, start) + '  ' + this.value.substring(this.selectionEnd);
				this.selectionStart = this.selectionEnd = start + 2;
			}
		}
	});

	initSplitDataCanvas(
		document.getElementById('split-data-horizontal'), 2,
		function() {
			var c = document.getElementById('split-data-horizontal');
			var cw = c.width;
			var ch = c.height;
			return [cw / 16 + Math.random() * cw * 6 / 16, ch / 16 + Math.random() * ch * 6 / 8];
		},
		function() {
			var c = document.getElementById('split-data-horizontal');
			var cw = c.width;
			var ch = c.height;
			return [cw * 9 / 16 + Math.random() * cw * 6 / 16, ch / 16 + Math.random() * ch * 6 / 8];
		},
		function(x1, y1, x2, y2) {
			return [x1, y1 - 1, x2, y2 + 1];
		}
	);

	initSplitDataCanvas(
		document.getElementById('split-data-vertical'), 2,
		function() {
			var c = document.getElementById('split-data-vertical');
			var cw = c.width;
			var ch = c.height;
			return [cw / 16 + Math.random() * cw * 6 / 8, ch / 16 + Math.random() * ch * 6 / 16];
		},
		function() {
			var c = document.getElementById('split-data-vertical');
			var cw = c.width;
			var ch = c.height;
			return [cw / 16 + Math.random() * cw * 6 / 8, ch * 9 / 16 + Math.random() * ch * 6 / 16];
		},
		function(x1, y1, x2, y2) {
			return [x1 - 1, y1, x2 + 1, y2];
		}
	);

	initSplitDataCanvas(
		document.getElementById('split-data-diagonal'), 2,
		function() {
			var c = document.getElementById('split-data-diagonal');
			var cw = c.width;
			var ch = c.height;
			return [cw / 16 + Math.random() * cw * 6 / 16, ch / 16 + Math.random() * ch * 6 / 16];
		},
		function() {
			var c = document.getElementById('split-data-diagonal');
			var cw = c.width;
			var ch = c.height;
			return [cw * 9 / 16 + Math.random() * cw * 6 / 16, ch * 9 / 16 + Math.random() * ch * 6 / 16];
		},
		function(x1, y1, x2, y2) {
			return [x1 + 1, y1 - 1, x2 - 1, y2 + 1];
		}
	);

	initSplitDataCanvas(
		document.getElementById('line-moving-animation'), 2,
		function() {
			var c = document.getElementById('line-moving-animation');
			var cw = c.width;
			var ch = c.height;
			return [cw / 16 + Math.random() * cw * 6 / 16, ch / 16 + Math.random() * ch * 6 / 16];
		},
		function() {
			var c = document.getElementById('line-moving-animation');
			var cw = c.width;
			var ch = c.height;
			return [cw * 9 / 16 + Math.random() * cw * 6 / 16, ch * 9 / 16 + Math.random() * ch * 6 / 16];
		},
		function(x1, y1, x2, y2) { return [x1, y1, x2, y2]; }
	).onclick = function() {
		var c = document.getElementById('line-moving-animation');
		var cc = c.getContext('2d');

		if(!cc.origImg) { cc.origImg = new Image(); cc.origImg.src = c.toDataURL(); }
		cc.drawImage(cc.origImg, 0, 0, c.width, c.height);

		var x = c.width / 8;
		cc.img = new Image();
		cc.img.src = c.toDataURL(); 

		cc.img.onload = function() {
			var interval = setInterval(function() {
				cc.drawImage(cc.img, 0, 0, c.width, c.height);

				x += 5;

				cc.strokeStyle = 'white';
				cc.lineWidth = 1;
				cc.beginPath();
				cc.moveTo(x, c.height / 8);
				cc.lineTo(c.width - x, c.height * 7 / 8);
				cc.stroke();

				if (x >= c.width * 7 / 8) { clearInterval(interval); }
			}, 100);
		};
	};

	function initDescendingFunctionCanvas(canvas, f, animate_ball_function) {
		var context = canvas.getContext('2d');
		context.fillStyle = '#272727';
		context.fillRect(0, 0, canvas.width, canvas.height);

		for(var i=-9.8;i<=10;i+=0.2) {
			var x = canvas.width / 2 + i * canvas.width / 20;
			var y = canvas.height / 2 + f(i) * canvas.height / 20;
			context.strokeStyle = 'white';
			context.beginPath();
			context.moveTo(x, y);
			context.lineTo(x - canvas.width / 100, canvas.height / 2 + f(i - 0.2) * canvas.height / 20);
			context.closePath();
			context.stroke();
		}

		context.image = new Image();
		context.image.src = canvas.toDataURL();
		
		function animate() {
			var time = 0;
			var interval = setInterval(function() {
				context.drawImage(context.image, 0, 0, canvas.width, canvas.height);
				if(animate_ball_function(canvas, context, time)) {
					clearInterval(interval);
					setTimeout(function() {
						animate();
					}, 1500);
				}
				time += 1000 / 30;
			}, 1000/30);
		}

		context.image.onload = function() {
			window.requestAnimationFrame(animate);
		};
	}

	initDescendingFunctionCanvas(
		document.getElementById('descending-function-1'),
		function(x) {
			return x;
		},
		function(c, cc, time) {
			cc.fillStyle = 'white';
			cc.beginPath();
			cc.arc(time / 10, (time / 10) * c.height / c.width, 5, 0, 2 * Math.PI);
			cc.closePath();
			cc.fill();
			return time / 10 >= c.width - 10;
		}
	);

	initDescendingFunctionCanvas(
		document.getElementById('descending-function-2'),
		function(x) {
			return -1 * x * x;
		},
		function(c, cc, time) {
			if(time <= 1000) {
				var x = -4 + 6 * time / 1000;
				var y = -1 * x * x;
				cc.fillStyle = 'white';
				cc.beginPath();
				cc.arc(c.width / 2 + x * c.width / 20, c.height / 2 + y * c.height / 20, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			}
			else if(time <= 1250){
				cc.fillStyle = 'white';
				cc.beginPath();
				cc.arc(c.width / 2 + c.width / 10, c.height / 2 - c.height / 5, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			}
			else if(time <= 2000) {
				var x = 2 - 2 * (time - 1250) / 750;
				var y = -1 * x * x;
				cc.fillStyle = 'white';
				cc.beginPath();
				cc.arc(c.width / 2 + x * c.width / 20, c.height / 2 + y * c.height / 20, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			}
			else if(time <= 2500){
				cc.fillStyle = 'white';
				cc.beginPath();
				cc.arc(c.width / 2, c.height / 2, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			}
			return true;
		}
	);

	initDescendingFunctionCanvas(
		document.getElementById('descending-function-3'),
		function(x) {
			return Math.exp(x);
		},
		function(c, cc, time) {
			if(time <= 1850) {
				cc.fillStyle = 'white';
				cc.beginPath();
				var x = (time - 1500) * 20 / 3000;
				cc.arc(c.width / 2 + x * c.width / 20, c.height / 2 + Math.exp(x) * c.height / 20, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			}
			else if(time <= 2000) {
				cc.fillStyle = 'white';
				cc.beginPath();
				var x = 350 * 20 / 3000;
				cc.arc(c.width / 2 + x * c.width / 20, c.height / 2 + Math.exp(x) * c.height / 20, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			}
			return true;
		}
	);

	initDescendingFunctionCanvas(
		document.getElementById('descending-function-4'),
		function(x) {
			return x === 0 ? 0 : (1 / x);
		},
		function(c, cc, time) {
			if(time <= 1500) {
				cc.fillStyle = 'white';
				cc.beginPath();
				var x = (1500 - time) * 20 / 3000;
				cc.arc(c.width / 2 + x * c.width / 20, c.height / 2 + (x === 0 ? 0 : 1 / x) * c.height / 20, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			}
			else if(time <= 2000) {
				cc.fillStyle = 'white';
				cc.beginPath();
				var x = 0.2;
				cc.arc(c.width / 2 + x * c.width / 20, c.height / 2 + (x === 0 ? 0 : 1 / x) * c.height / 20, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			} 
			return true;
		}
	);

	initDescendingFunctionCanvas(
		document.getElementById('descending-function-5'),
		function(x) {
			return 4 * Math.pow(x, 5) + 3 * Math.pow(x, 4) + 2 * Math.pow(x, 3) + Math.pow(x, 2);
		},
		function(c, cc, time) {
			if(time <= 1920) {
				cc.fillStyle = 'white';
				cc.beginPath();
				var x = (time - 1500) * 20 / 9000;
				var y = 4 * Math.pow(x, 5) + 3 * Math.pow(x, 4) + 2 * Math.pow(x, 3) + Math.pow(x, 2);
				cc.arc(c.width / 2 + x * c.width / 20, c.height / 2 + y * c.height / 20, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			}
			else if(time <= 2500) {
				cc.fillStyle = 'white';
				cc.beginPath();
				var x = 420 * 20 / 9000;
				var y = 4 * Math.pow(x, 5) + 3 * Math.pow(x, 4) + 2 * Math.pow(x, 3) + Math.pow(x, 2);
				cc.arc(c.width / 2 + x * c.width / 20, c.height / 2 + y * c.height / 20, 5, 0, 2 * Math.PI);
				cc.closePath();
				cc.fill();
				return false;
			}
			return true;
		}
	);

	(function() {
		var c = document.getElementById('neural-network-image');
		var cc = c.getContext('2d');

		cc.fillStyle = 'black';
		cc.fillRect(0, 0, c.width, c.height);

		cc.strokeStyle = 'white';
		for(var y=c.height/8;y<=c.height*7/8;y+=c.height*3/8) {
			cc.beginPath();
			cc.arc(c.width / 8, y, 15, 0, 2 * Math.PI);
			cc.closePath();
			cc.stroke();
			cc.beginPath();
			cc.arc(c.width * 7 / 8, y, 15, 0, 2 * Math.PI);
			cc.closePath();
			cc.stroke();
		}

		cc.beginPath();
		cc.arc(c.width / 2, c.height / 4, 15, 0, 2 * Math.PI);
		cc.closePath();
		cc.stroke();
		cc.beginPath();
		cc.arc(c.width / 2, c.height * 3 / 4, 15, 0, 2 * Math.PI);
		cc.closePath();
		cc.stroke();

		for(var j=c.height/8;j<=c.height*7/8;j+=c.height*3/8) {
			for(var i=c.height/4;i<=c.height*3/4;i+=c.height/2) {
				cc.beginPath();
				cc.moveTo(c.width / 8 + 15, j);
				cc.lineTo(c.width / 2 - 15, i);
				cc.stroke();
				cc.beginPath();
				cc.moveTo(c.width * 7 / 8 - 15, j);
				cc.lineTo(c.width / 2 + 15, i);
				cc.stroke();
			}
		}
	})();

	(function() {
		var c = document.getElementById('output-layer-first-neuron');
		var cc = c.getContext('2d');

		cc.fillStyle = 'black';
		cc.fillRect(0, 0, c.width, c.height);

		cc.strokeStyle = 'white';
		for(var y=c.height/8;y<=c.height*7/8;y+=c.height*3/8) {
			cc.beginPath();
			cc.arc(c.width / 8, y, 15, 0, 2 * Math.PI);
			cc.closePath();
			cc.stroke();
			cc.beginPath();
			cc.arc(c.width * 7 / 8, y, 15, 0, 2 * Math.PI);
			cc.closePath();
			cc.stroke();
		}

		cc.beginPath();
		cc.arc(c.width / 2, c.height / 4, 15, 0, 2 * Math.PI);
		cc.closePath();
		cc.stroke();
		cc.beginPath();
		cc.arc(c.width / 2, c.height * 3 / 4, 15, 0, 2 * Math.PI);
		cc.closePath();
		cc.stroke();

		for(var j=c.height/8;j<=c.height*7/8;j+=c.height*3/8) {
			for(var i=c.height/4;i<=c.height*3/4;i+=c.height/2) {
				cc.beginPath();
				cc.moveTo(c.width / 8 + 15, j);
				cc.lineTo(c.width / 2 - 15, i);
				cc.stroke();
				cc.beginPath();
				cc.moveTo(c.width * 7 / 8 - 15, j);
				cc.lineTo(c.width / 2 + 15, i);
				cc.stroke();
			}
		}


		cc.fillStyle = 'rgb(' + (0.97 * 255) + ',' + (0.99 * 255) + ',' + (0.99 * 255) + ')';
		cc.beginPath();
		cc.arc(c.width * 7 / 8, c.height / 8, 15, 0, 2 * Math.PI);
		cc.closePath();
		cc.fill();
		cc.fillStyle = 'black';
		cc.textAlign = 'center';
		cc.textBaseline = 'center';
		cc.fillText(0.97, c.width * 7 / 8, c.height / 8);
	})();

	(function(){
		function updateWeightedSumDisplay() {
			document.getElementById('wsi-sum').innerHTML = '';
			var value = 0;
			for(var i=1;i<4;i++) {
				value += document.getElementById('w' + i).value * document.getElementById('v' + i).value;
				document.getElementById('wsi-sum').innerHTML += ('w' + i) + (' * v' + i);
				if(i < 3) { document.getElementById('wsi-sum').innerHTML += ' + '; }
			}
			document.getElementById('wsi-sum').innerHTML += ' = ' + value;
		}

		['w','v'].forEach(function(pre) {
			for(i=1;i<4;i++) {
				document.getElementById(pre + i).pre = pre;
				document.getElementById(pre + i).i = i;
				document.getElementById(pre + i).oninput = function() {
					var value = this.value;
					document.getElementById('wsi-' + this.pre + ("" + this.i) + '-val').innerHTML = value;
					updateWeightedSumDisplay();
				};
				document.getElementById(pre + i).onchange = function() {
					var value = this.value;
					document.getElementById('wsi-' + this.pre + ("" + this.i) + '-val').innerHTML = value;
					updateWeightedSumDisplay();
				};
			}
		});

		updateWeightedSumDisplay();
	})();
};
