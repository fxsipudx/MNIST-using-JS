# Neural Network Library and MNIST Digit Recognition

This project contains a simple neural network library implemented in JavaScript and an application of this library to the MNIST handwritten digit recognition task.

## Project Structure

The project consists of three main components:

1. `matrix.js`: A Matrix class for matrix operations.
2. `nn.js`: A Neural Network class implementing feedforward and backpropagation.
3. `mnist.js`: An implementation of MNIST digit recognition using the neural network.

## Neural Network Library

### Matrix Class

The `Matrix` class provides basic matrix operations including:

- Matrix creation and initialization
- Transpose
- Element-wise operations (add, multiply)
- Matrix multiplication
- Random initialization
- Mapping functions to matrix elements

### Neural Network Class

The `NeuralNetwork` class implements a simple feedforward neural network with:

- Configurable input, hidden, and output layers
- Sigmoid activation function
- Backpropagation training algorithm

## MNIST Digit Recognition

The MNIST implementation uses the neural network library to recognize handwritten digits. It includes:

- Loading of MNIST dataset (training and test sets)
- Training the network on 60,000 images
- Testing the network on 10,000 images
- Reporting of test accuracy

## Usage

To run the MNIST digit recognition:

1. Ensure you have the MNIST dataset files in a `data` directory:
   - `train_images.bin`
   - `train_labels.bin`
   - `testimages.bin`
   - `testlabels.bin`

2. Include the p5.js library in your HTML file.

3. Include the project files in your HTML:

   ```html
   <script src="matrix.js"></script>
   <script src="nn.js"></script>
   <script src="mnist.js"></script>
   ```

4. Open the HTML file in a web browser. The training will start automatically and the test results will be logged to the console.

## Customization

You can customize the neural network architecture by modifying the parameters in the `setup()` function:

```javascript
nn = new NeuralNetwork(784, 128, 10);
```

Here, 784 is the input size (28x28 pixels), 128 is the number of hidden nodes, and 10 is the output size (10 digits).

You can also adjust the number of training epochs by changing the `numEpochs` variable.

## Future Improvements

Potential areas for improvement include:

1. Implementing additional activation functions (e.g., ReLU)
2. Adding support for multiple hidden layers
3. Implementing batch training for faster convergence
4. Adding visualization of the training process
5. Implementing early stopping to prevent overfitting

## Contributing

Contributions to this project are welcome. Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
