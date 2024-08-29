let nn;
let digitTrainData, digitLabelData, testImagesData, testLabelsData;
let imgSize = 28 * 28;
let numEpochs = 100; // Number of epochs

function setup() {
  createCanvas(400, 400);
  nn = new NeuralNetwork(784, 128, 10); // Initialize neural network
  let imgOffSet = 16;
  let labelOffSet = 8;
  let numImages = 60000; // Number of images to train on

  // Training the neural network for multiple epochs
  for (let epoch = 0; epoch < numEpochs; epoch++) {
    console.log(`Starting epoch ${epoch + 1} / ${numEpochs}`);
    for (let i = 0; i < numImages; i++) {
      let image = [];
      for (let j = 0; j < imgSize; j++) {
        image.push(digitTrainData.bytes[imgOffSet + i * imgSize + j] / 255.0);
      }
      let label = digitLabelData.bytes[labelOffSet + i];

      let targets = Array(10).fill(0);
      targets[label] = 1;

      nn.train(image, targets);
    }
    console.log(`Epoch ${epoch + 1} complete.`);
  }

  console.log("Training complete.");
  testNeuralNetwork(); // Call the test function after training
}

function testNeuralNetwork(){
  let imgOffSet = 16;  // Header size for the test images
  let labelOffSet = 8; // Header size for the test labels
  let numTestImages = 10000; // Number of test images
  let correct = 0;

  for(let i=0;i<numTestImages;i++){
    let image = [];
    for(let j=0;j<imgSize;j++){
      image.push(testImagesData.bytes[imgOffSet + i * imgSize + j]/255.0);
    }
    let label =  testLabelsData.bytes[labelOffSet + i];
    let prediction = nn.feedforward(image);
    let predictedLabel = prediction.indexOf(Math.max(...prediction));
    if (predictedLabel === label) {
      correct++;
    }
  }
  let accuracy = (correct / numTestImages) * 100;
  console.log(`Test Accuracy: ${accuracy.toFixed(2)}%`);
}

function preload(){
  digitTrainData = loadBytes('data/train_images.bin');
  digitLabelData = loadBytes('data/train_labels.bin');
  testImagesData = loadBytes('data/testimages.bin');
  testLabelsData = loadBytes('data/testlabels.bin');
}

function draw() {
  background(220);
}