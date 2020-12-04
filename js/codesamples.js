function initCodeSamples() {
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
}