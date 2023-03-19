//your JS code here. If required.
const delayMessage = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('Hello, world!');
          }, 1000);
        });
      };
      const updateText = async () => {
        const message = await delayMessage();
        document.getElementById('output').innerHTML = message;
      };
      updateText();