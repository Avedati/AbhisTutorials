function createResourceList(id, titles, links) {
	for(var i=0;i<titles.length;i++) {
		var list_item = document.createElement('li');
		var link = document.createElement('a');
		link.target = '_blank';
		link.href = links[i];
		link.innerHTML = titles[i];
		list_item.appendChild(link);
		document.getElementById(id).appendChild(list_item);
	}
}

function loadCodeInto(id, code, language) {
	code = code
	  .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
	  .replace(/ /g, '&nbsp;');
	if(language == 'js') {
		code = code
		  .replace(/=/g, '<span class=\'blue\'>=</span>')
		  .replace(/var&nbsp;/g, '<span class=\'red\'>var</span>&nbsp;')
		  .replace(/new&nbsp;/g, '<span class=\'red\'>new</span>&nbsp;')
		  .replace(/if/g, '<span class=\'red\'>if</span>')
		  .replace(/else/g, '<span class=\'red\'>else</span>')
		  .replace(/class&nbsp;/g, '<span class=\'red\'>class</span>&nbsp;')
		  .replace(/this/g, '<span class=\'green\'>this</span>')
		  .replace(/function/g, '<span class=\'green\'>function</span>')
		  .replace(/window\./g, '<span class=\'green\'>window</span>.')
		  .replace(/window&nbsp;/g, '<span class=\'green\'>window</span>&nbsp;');
	}
	else if(language == 'python') {
		code = code
		  .replace(/import&nbsp;/g, '<span class=\'red\'>import</span>&nbsp;')
		  .replace(/from&nbsp;/g, '<span class=\'red\'>from</span>&nbsp;')
		  .replace(/&nbsp;as&nbsp;/g, '&nbsp;<span class=\'red\'>as</span>&nbsp;')
		  .replace(/def&nbsp;/g, '<span class=\'red\'>def</span>&nbsp;')
		  .replace(/return&nbsp;/g, '<span class=\'red\'>return</span>&nbsp;')
		  .replace(/=&nbsp;/g, '<span class=\'green\'>=</span>&nbsp;');
	}
	else if(language == 'html') {
		code = code
		  .replace(/</g, '&lt;')
		  .replace(/>/g, '&gt;')
		  .replace(/=/g, '<span class=\'blue\'>=</span>')
		  .replace(/&lt;/g, '<span class=\'green\'>&lt;</span>')
		  .replace(/&gt;/g, '<span class=\'green\'>&gt;</span>')
	}
	document.getElementById(id).innerHTML = code;
}

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