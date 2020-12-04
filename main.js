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

window.onload = function() {

	loadCodeInto('math-1',
`For example ...
	The derivative of \`0\` is \`0\`.
	The derivative of \`1\` is \`0\`.
	The derivative of \`2\` is \`0\`.
	The derivative of infinity is \`0\`.
	The derivative of \`-1\` is \`0\`.
	The derivative of \`-2\` is \`0\`.
	The derivative of -infinity is \`0\`.
	and so on and so forth...`,
	''
	);

	loadCodeInto('math-2',
`For example ...
	The derivative of \`x^2\` is \`2x\`.
	The derivative of \`x^3\` is \`3x^2\`.
	The derivative of \`x^3 + x^2\` is \`3x^2 + 2x\`.
	The derivative of \`4x^4\` is \`4 * 4x^3 = 16x^3\`.
	The derivative of \`5x^6 + 12x^5\` is \`30x^5 + 60x^4\`.
	The derivative of \`x\`, which is equal to \`x^1\`, is \`1 * x^0\` which is equal to \`1\`.`,
	''
	);

	loadCodeInto('math-3',
`What is the derivative of ... 
	\`3x^3\`?
	\`10x^2\`?
	\`20x^4\`?
	\`x^8\`?
	\`e*x^6\`?`,
	''
	);

	loadCodeInto('math-4',
`For example ...
	The derivative of \`x * x\`, which is equal to \`x^2\`, is \`1 * x + x * 1\` which is equal to \`2x\`, reafirming our previous answer.
	The derivative of \`x^2 * x\`, which is equal to \`x^3\`, is \`2x * x + x^2 * 1\` which is equal to \`2x^2 + x^2\` which is equal to \`3x^2\`, reafirming our previous answer.`,
	''
	);

	loadCodeInto('math-5',
`What is the derivative of ... 
	\`x^2 * x^2\`?
	\`10x * 20x\`?
	\`x * 3x^3\`?
	\`x * x * x * x\`?
	\`80 * x * sqrt(x)\`?`,
	''
	);

	loadCodeInto('math-6',
`For example ...
	The derivative of \`x / x\`, which is equal to \`1\`, is \`(1 * x - x * 1) / x^2\` which is equal to \`0 / x^2\` which is equal to \`0\`.
	The derivative of \`x^2 / x\`, which is equal to \`x\`, is \`(2x * x - x^2 * 1) / x^2\` which is equal to \`(2x^2 - x^2) / x^2\` which is equal to x^2 / x^2 which is equal to \`1\`.`,
	''
	);

	loadCodeInto('math-7',
`What is the derivative of ... 
	\`x^3 / x\`?
	\`1 / x\`?
	\`1 / sqrt(x)\`?
	\`sqrt(x) / x\`?
	\`20x^4 / 30x^5\`?`,
	''
	);

	loadCodeInto('math-8',
`For example ...
	\`f(g(x))\` where \`f(x) = x^2\` and \`g(x) = x^2\` is equal to \`x^4\`, and it's derivative is equal to \`2(x^2) * 2x\` which is equal to \`4x^3\`, affirming that the derivative of \`x^4\` is \`4x^3\`.
	\`f(g(x))\` where \`f(x) = x^2\` and \`g(x) = sqrt(x)\` is equal to \`x\`, and it's derivative is equal to \`2(sqrt(x)) * 1 / (2 * sqrt(x))\` which is equal to \`1\`, affirming that the derivative of \`x\` is \`1\`.`,
	''
	);

	loadCodeInto('math-9',
`What is the derivative of ...
	\`f(g(x))\` where \`f(x) = x^2\` and \`g(x) = x^3\`?
	\`f(g(x))\` where \`f(x) = x\` and \`g(x) = sqrt(x)\`?
	\`f(g(x))\` where \`f(x) = 2x\` and \`g(x) = 3x\`?
	\`f(g(x))\` where \`f(x) = x^(1/3)\` and \`g(x) = x^(1/4)\`?
	\`f(g(x))\` where \`f(x) = 1/x\` and \`g(x) = 1/x\`?`,
	''
	);
	
	loadCodeInto('first-neural-network',
`import tensorflow as tf
import tensorflow_datasets as tfds
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Flatten, Dense

img_width = 28
img_height = 28

# https://www.tensorflow.org/datasets/keras_example
(ds_train, ds_test), ds_info = tfds.load(
  'mnist', split=['train', 'test'], shuffle_files=True, as_supervised=True, with_info=True
)

def normalize_img(image, label):
  """Normalizes images: uint8 -> float32."""
  return tf.cast(image, tf.float32) / 255., label

ds_train = ds_train.map(normalize_img, num_parallel_calls=tf.data.experimental.AUTOTUNE)
ds_train = ds_train.cache()
ds_train = ds_train.shuffle(ds_info.splits['train'].num_examples)
ds_train = ds_train.batch(128)
ds_train = ds_train.prefetch(tf.data.experimental.AUTOTUNE)

ds_test = ds_test.map(normalize_img, num_parallel_calls=tf.data.experimental.AUTOTUNE)
ds_test = ds_test.batch(128)
ds_test = ds_test.cache()
ds_test = ds_test.prefetch(tf.data.experimental.AUTOTUNE)

model = Sequential([
  Flatten(input_shape=(img_width, img_height, 1)),
  Dense(128, activation='relu'),
  Dense(10, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(ds_train, epochs=10, validation_data=ds_test)`,
	'python'
	);

	loadCodeInto('first-neural-network-1',
`import tensorflow as tf
import tensorflow_datasets as tfds
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Flatten, Dense`,
	'python'
	);

	loadCodeInto('first-neural-network-2',
`img_width = 28
img_height = 28`,
	'python'
	);

	loadCodeInto('first-neural-network-3',
`(ds_train, ds_test), ds_info = tfds.load(
  'mnist', split=['train', 'test'], shuffle_files=True, as_supervised=True, with_info=True
)`,
	'python'
	);

	loadCodeInto('first-neural-network-4',
`def normalize_img(image, label):
  """Normalizes images: uint8 -> float32."""
  return tf.cast(image, tf.float32) / 255., label`,
	'python'
	);

	loadCodeInto('first-neural-network-5',
	`ds_train = ds_train.map(normalize_img, num_parallel_calls=tf.data.experimental.AUTOTUNE)`,
	'python'
	);

	loadCodeInto('first-neural-network-6',
	`ds_train = ds_train.cache()`,
	'python'
	);

	loadCodeInto('first-neural-network-7',
	`ds_train = ds_train.shuffle(ds_info.splits['train'].num_examples)`,
	'python'
	);

	loadCodeInto('first-neural-network-8',
	`ds_train = ds_train.batch(128)`,
	'python'
	);

	loadCodeInto('first-neural-network-9',
	`ds_train = ds_train.prefetch(tf.data.experimental.AUTOTUNE)`,
	'python'
	);

	loadCodeInto('first-neural-network-10',
`ds_test = ds_test.map(normalize_img, num_parallel_calls=tf.data.experimental.AUTOTUNE)
ds_test = ds_test.batch(128)
ds_test = ds_test.cache()
ds_test = ds_test.prefetch(tf.data.experimental.AUTOTUNE)`,
	'python'
	);

	loadCodeInto('first-neural-network-11',
`model = Sequential([
  Flatten(input_shape=(img_width, img_height, 1)),
  Dense(128, activation='relu'),
  Dense(10, activation='softmax')
])`,
	'python'
	);

	loadCodeInto('first-neural-network-12',
	`model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])`,
	'python'
	);

	loadCodeInto('first-neural-network-13',
	`model.fit(ds_train, epochs=10, validation_data=ds_test)`,
	'python'
	);

	loadCodeInto('second-neural-network',
`import tensorflow as tf
import numpy as np
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Flatten, Dense, Conv2D, MaxPool2D, Dropout
from tensorflow.keras.preprocessing.image import ImageDataGenerator

img_width = 256
img_height = 256

datagen = ImageDataGenerator(rescale=1/255.0, validation_split=0.2)
training_data_generator = datagen.flow_from_directory(directory='Arjun', target_size=(img_width, img_height), class_mode='binary', batch_size=16, subset='training')
validation_data_generator = datagen.flow_from_directory(directory='Arjun', target_size=(img_width, img_height), class_mode='binary', batch_size=16, subset='validation')

model = Sequential([
  Conv2D(16, (3, 3), input_shape=(img_width, img_height, 3), activation='relu'),
  MaxPool2D(2, 2),
  Dropout(0.2),

  Conv2D(32, (3, 3), input_shape=(img_width, img_height, 3), activation='relu'),
  MaxPool2D(2, 2),
  Dropout(0.3),

  Conv2D(64, (3, 3), input_shape=(img_width, img_height, 3), activation='relu'),
  MaxPool2D(2, 2),
  Dropout(0.4),

  Flatten(),
  Dense(128, activation='relu'),
  Dropout(0.5),
  Dense(1, activation='sigmoid')
])

model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
history = model.fit(training_data_generator, steps_per_epoch=len(training_data_generator), epochs=7, validation_data=validation_data_generator, validation_steps=len(validation_data_generator))`,
	'python'
	);

	loadCodeInto('second-neural-network-1',
	`datagen = ImageDataGenerator(rescale=1/255.0, validation_split=0.2)`,
	'python'
	);

	loadCodeInto('second-neural-network-2',
`training_data_generator = datagen.flow_from_directory(directory='Arjun', target_size=(img_width, img_height), class_mode='binary', batch_size=16, subset='training')
validation_data_generator = datagen.flow_from_directory(directory='Arjun', target_size=(img_width, img_height), class_mode='binary', batch_size=16, subset='validation')`,
	'python'
	);

	loadCodeInto('second-neural-network-3',
`Conv2D(16, (3, 3), input_shape=(img_width, img_height, 3), activation='relu'),
MaxPool2D(2, 2),
Dropout(0.2),`,
	'python'
	);

	loadCodeInto('third-neural-network',
`# https://www.youtube.com/watch?v=Jdagdil0FIw
import tensorflow as tf
import numpy as np
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Flatten, Dense, Conv2D, MaxPool2D, Dropout
from tensorflow.keras.preprocessing.image import ImageDataGenerator

img_width = 500
img_height = 500

datagen = ImageDataGenerator(rescale=1/255.0)
training_data_generator = datagen.flow_from_directory(directory='bean_data/train', color_mode='grayscale', target_size=(img_width, img_height), class_mode='sparse', batch_size=19)
validation_data_generator = datagen.flow_from_directory(directory='bean_data/validation', color_mode='grayscale', target_size=(img_width, img_height), class_mode='sparse', batch_size=19)

model = Sequential([
  Conv2D(16, (3, 3), input_shape=(img_width, img_height, 1), activation='relu'),
  MaxPool2D(2, 2),
  Conv2D(32, (3, 3), input_shape=(img_width, img_height, 1), activation='relu'),
  MaxPool2D(2, 2),

  Flatten(),
  Dense(256, activation='relu'),
  Dropout(0.5),
  Dense(128, activation='relu'),
  Dropout(0.5),
  Dense(3, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
history = model.fit(training_data_generator, steps_per_epoch=len(training_data_generator), epochs=10, validation_data=validation_data_generator, validation_steps=len(validation_data_generator))`,
	'python'
	);

	loadCodeInto('third-neural-network-1',
	`Dense(3, activation='softmax')`,
	'python'
	);

	loadCodeInto('game-1',
`<!doctype html>
<html>
  <head>
    <meta charset='utf-8' />
    <title>Pong</title>
    <link rel='stylesheet' href='style.css' type='text/css' />
    <script src='main.js' type='text/javascript'></script>
  </head>
  <body>
    <canvas id='canvas'></canvas>
  </body>
</html>`,
	'html'
	);

	loadCodeInto('game-2',
`html, body {
  margin:0;
  padding:0;
  width:100%;
  height:100%;
  overflow:hidden;
}`,
	'css'
	);

	loadCodeInto('game-3',
`window.onload = function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var fps = 30;
  var paddle1 = new Paddle(20, window.innerHeight / 2 - 40);
  var paddle2 = new Paddle(window.innerWidth - 40, window.innerHeight / 2 - 40, ai=true);
  var ball = new Ball(window.innerWidth / 2 - 10, window.innerHeight / 2 - 10);
};`,
	'js'
	);

	loadCodeInto('game-4',
`function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}`,
	'js'
	);

	loadCodeInto('game-5',
`function update() {

}

function render() {

}`,
	'js'
	);

	loadCodeInto('game-6',
`
function tick() {
  update();
  render();
}
`,
	'js'
	);

	loadCodeInto('game-7',
`function start() {
  resize();
  window.onresize = resize;
  setInterval(tick, 1000 / fps);
}

start();`,
	'js'
	);

	loadCodeInto('game-8',
`function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}`,
	'js'
	);

	loadCodeInto('game-9',
`class Ball {

}

class Paddle {

}`,
	'js'
	);

	loadCodeInto('game-10',
`class Ball {
  constructor(x, y) {
    this.originalX = x;
    this.originalY = y;
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;

    this.xVelocity = randomInt(-5, 5);
    this.yVelocity = randomInt(-5, 5);
    if(this.xVelocity === 0) { this.xVelocity = randomInt(1, 5); }
  }
}`,
	'js'
	);

	loadCodeInto('game-11',
`update(paddle1, paddle2) {
  this.x += this.xVelocity;
  this.y += this.yVelocity;

  if(this.y < 0) {
    this.y = 0;
    this.yVelocity *= -1;
  }
  else if(this.y + this.height > window.innerHeight) {
    this.y = window.innerHeight - this.height;
    this.yVelocity *= -1;
  }

  if(this.x < paddle1.x + paddle1.width && this.x > paddle1.x && paddle1.y < this.y + this.height && paddle1.y + paddle1.height > this.y) {
    this.x = paddle1.x + paddle1.width;
    this.xVelocity *= -1;
  }
  else if(this.x + this.width > paddle2.x && this.x + this.width < paddle2.x + paddle2.width && paddle2.y < this.y + this.height && paddle2.y + paddle2.height > this.y) {
    this.x = paddle2.x - this.width;
    this.xVelocity *= -1;
  }

  if(this.x < 0) {
    this.x = this.originalX;
    this.y = this.originalY;
    paddle2.score += 1;
  }
  else if(this.x + this.width > window.innerWidth) {
    this.x = this.originalX;
    this.y = this.originalY;
    paddle1.score += 1;
  }
}`,
	'js'
	);

	loadCodeInto('game-12',
`render(canvas, context) {
  context.fillStyle = 'white';
  context.fillRect(this.x, this.y, this.width, this.height);
}`,
	'js'
	);

	loadCodeInto('game-13',
`class Paddle {
  constructor(x, y, ai=false) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 80;
    this.ai = ai;
    this.score = 0;
  }
}`,
	'js'
	);

	loadCodeInto('game-14',
`update(ball) {
  if(this.ai) {
    var ball_center_y = ball.y + ball.height / 2;
    var this_center_y = this.y + this.height / 2;
    if(ball_center_y > this_center_y) { this.y += 3; }
    else if(ball_center_y < this_center_y) { this.y -= 3; }
  }
}`,
	'js'
	);

	loadCodeInto('game-15',
`render(canvas, context) {
  context.fillStyle = 'white';
  context.fillRect(this.x, this.y, this.width, this.height);

  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.font = '24px Arial';
  if(this.x < window.innerWidth / 2) {
    context.fillText(this.score, window.innerWidth / 4, window.innerHeight / 8);
  }
  else {
    context.fillText(this.score, window.innerWidth * 3 / 4, window.innerHeight / 8);
  }
}`,
	'js'
	);

	loadCodeInto('game-16',
`var paddle1 = new Paddle(20, window.innerHeight / 2 - 40);
var paddle2 = new Paddle(window.innerWidth - 40, window.innerHeight / 2 - 40, ai=true);
var ball = new Ball(window.innerWidth / 2 - 10, window.innerHeight / 2 - 10);`,
	'js'
	);

	loadCodeInto('game-17',
`function keydown(ev) {
  if(ev.keyCode === 38) {
    paddle1.y = Math.max(paddle1.y - 5, 0);
  }
  else if(ev.keyCode === 40) {
    paddle1.y = Math.min(paddle1.y + 5, window.innerHeight - paddle1.height);
  }
}`,
	'js'
	);

	loadCodeInto('game-18', `window.onkeydown = keydown;`, 'js');

	loadCodeInto('game-19',
`function update() {
  ball.update(paddle1, paddle2);
  paddle1.update(ball);
  paddle2.update(ball);
}`,
	'js'
	);

	loadCodeInto('game-20',
`function render() {
  context.fillStyle = 'black';
  context.fillRect(0, 0, canvas.width, canvas.height);
  ball.render(canvas, context);
  paddle1.render(canvas, context);
  paddle2.render(canvas, context);
}`,
	'js'
	);

	loadCodeInto('completed-game',
`
window.onload = function() {

    class Ball {

      constructor(x, y) {
        this.originalX = x;
        this.originalY = y;
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.xVelocity = randomInt(-5, 5);
        this.yVelocity = randomInt(-5, 5);
        if(this.xVelocity === 0) { this.xVelocity = randomInt(1, 5); }
      }

      update(paddle1, paddle2) {
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if(this.y < 0) {
          this.y = 0;
          this.yVelocity *= -1;
        }
        else if(this.y + this.height > window.innerHeight) {
          this.y = window.innerHeight - this.height;
          this.yVelocity *= -1;
        }

        if(this.x < paddle1.x + paddle1.width && this.x > paddle1.x && paddle1.y < this.y + this.height && paddle1.y + paddle1.height > this.y) {
          this.x = paddle1.x + paddle1.width;
          this.xVelocity *= -1;
        }
        else if(this.x + this.width > paddle2.x && this.x + this.width < paddle2.x + paddle2.width && paddle2.y < this.y + this.height && paddle2.y + paddle2.height > this.y) {
          this.x = paddle2.x - this.width;
          this.xVelocity *= -1;
        }

        if(this.x < 0) {
          this.x = this.originalX;
          this.y = this.originalY;
          paddle2.score += 1;
        }
        else if(this.x + this.width > window.innerWidth) {
          this.x = this.originalX;
          this.y = this.originalY;
          paddle1.score += 1;
        }
      }

      render(canvas, context) {
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, this.width, this.height);
      }
    }

    class Paddle {

      constructor(x, y, ai=false) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 80;
        this.ai = ai;
        this.score = 0;
      }

      update(ball) {
        if(this.ai) {
          var ball_center_y = ball.y + ball.height & ; 2;
          var this_center_y = this.y + this.height / 2;
          if(ball_center_y > this_center_y) { this.y += 3; }
          else if(ball_center_y < this_center_y) { this.y -= 3; }
        }
      }

      render(canvas, context) {
        context.fillStyle = 'white';
        context.fillRect(this.x, this.y, this.width, this.height);
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = '24px Arial';
        if(this.x < window.innerWidth / 2) {
          context.fillText(this.score, window.innerWidth / 4, window.innerHeight / 8);
        }
        else {
          context.fillText(this.score, window.innerWidth * 3 / 4, window.innerHeight / 8);
        }
      }
    }

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var fps = 30;
    var paddle1 = new Paddle(20, window.innerHeight / 2 - 40);
    var paddle2 = new Paddle(window.innerWidth - 40, window.innerHeight / 2 - 40, ai=true);
    var ball = new Ball(window.innerWidth / 2 - 10, window.innerHeight / 2 - 10);

    function randomInt(min, max) {
      return min + Math.floor(Math.random() * (max - min));
    }

    function keydown(ev) {
      if(ev.keyCode === 38) {
        paddle1.y = Math.max(paddle1.y - 5, 0);
      }
      else if(ev.keyCode === 40) {
        paddle1.y = Math.min(paddle1.y + 5, window.innerHeight - paddle1.height);
	  }
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function update() {
      ball.update(paddle1, paddle2);
      paddle1.update(ball);
      paddle2.update(ball);
    }

    function render() {
      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);
      ball.render(canvas, context);
      paddle1.render(canvas, context);
      paddle2.render(canvas, context);
    }

    function tick() {
      update();
      render();
    }

    function start() {
      resize();
      window.onresize = resize;
      window.onkeydown = keydown;
      setInterval(tick, 1000 / fps);
    }

    start();
};
`,
	'js'
	);

	loadCodeInto('assembly-language-program',
`section .text
global _start

_start:
	mov edx, helloworld_length
	mov ecx, helloworld
	mov ebx, 1
	mov eax, 4
	int 0x80

	mov eax, 1
	int 0x80

section .data
helloworld: db 'Hello, world!',10
helloworld_length: equ $ - helloworld`,
	'asm'
	);

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

	if(window.location.hash) {
		if(window.location.hash === '#aicourse') {
			document.getElementById('go').click();
			document.getElementById('neural-networks').click();
		}
		else if(window.location.hash === '#gamedesigncourse') {
			document.getElementById('go').click();
			document.getElementById('game-design').click();
		}
		else if(window.location.hash === '#assemblylanguagecourse') {
			document.getElementById('go').click();
			document.getElementById('assembly-language').click();
		}
		else if(['physics','economics','ela','whistory'].map(function(v) { return '#' + v + 'resources'; })
			.includes(window.location.hash)) {
			document.getElementById('go').click();
			document.getElementById(window.location.hash.substring(1,window.location.hash.length - 9)).click();
		}
	}
	
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
