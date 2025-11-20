      const inputEl = document.getElementById("input-data");
      console.log(inputEl);
      const bottomRight = document.getElementById("bottom-right");
      console.log(bottomRight);

      inputEl.addEventListener("input", () => {
        let limit = 10;
        const length = inputEl.value.length;
        bottomRight.textContent = `${length} / ${limit}`;

        if(length > limit) {
            bottomRight.classList.add("red")
        } else {
            bottomRight.classList.remove("red");
        }
      })