class Iris {
    constructor(data, x, y) {
      this.data = data;
      this.baseX = x;
      this.baseY = y;
      this.color = data.color;
      this.angle = Math.random() * Math.PI * 2;
    }
  
    draw(ctx, time, hovered = false, animate = true) {
      const radius = (this.data.petalLength * 5) + (animate ? Math.sin(time + this.baseX * 0.01) * 2 : 0);
      const floatY = this.baseY + (animate ? Math.sin(time + this.baseX * 0.02) * 5 : 0);
  
      ctx.beginPath();
      ctx.arc(this.baseX, floatY, radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
  
      if (hovered) {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }
  
    isHovered(mx, my, time, animate = true) {
      const floatY = this.baseY + (animate ? Math.sin(time + this.baseX * 0.02) * 5 : 0);
      const radius = (this.data.petalLength * 5) + (animate ? Math.sin(time + this.baseX * 0.01) * 2 : 0);
      const dx = mx - this.baseX;
      const dy = my - floatY;
      return Math.sqrt(dx * dx + dy * dy) < radius;
    }
  }
  
  window.onload = async function () {
    console.log("task 7-8");
  
    let possibleColor = ["#5d3fd3", "#a73fd3", "#d33fb5", "#d35d3f", "#d3a73f"];
    let animateMotion = true;
  
    try {
      const response = await fetch("data/iris.json");
      const data = await response.json();
  
      const irisesWithColors = data.map(iris => ({
        ...iris,
        color: possibleColor[Math.floor(Math.random() * possibleColor.length)]
      }));
  
      const filteredIrises = irisesWithColors.filter(iris => iris.sepalWidth < 4);
      const totalPetalLength = irisesWithColors.reduce((sum, iris) => sum + iris.petalLength, 0);
      const averagePetalLength = totalPetalLength / irisesWithColors.length;
      const findPetalWidth = irisesWithColors.find(x => x.petalWidth > 1.0);
      const somePetalLengthMoreThan = irisesWithColors.some(x => x.petalLength > 10);
      const somePetalLengthEqual = irisesWithColors.some(x => x.petalLength == 4.2);
      const everyPetalWidthLessThan = irisesWithColors.every(x => x.petalWidth < 3);
      const everySepalWidthMoreThan = irisesWithColors.every(x => x.sepalWidth > 1.2);
      const irisesWithColorsSorted = irisesWithColors.toSorted((a, b) => a.petalWidth - b.petalWidth);
  
      document.body.style.background = '#f0f8ff';
      document.body.style.fontFamily = 'Roboto, sans-serif';
  
      function createStyledButton(label) {
        const btn = document.createElement("button");
        btn.textContent = label;
        btn.style.margin = "6px";
        btn.style.padding = "8px 14px";
        btn.style.border = "none";
        btn.style.borderRadius = "8px";
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = "#4e89ae";
        btn.style.color = "white";
        btn.style.fontSize = "14px";
        return btn;
      }
  
      const btnAll = createStyledButton("Show All");
      const btnSetosa = createStyledButton("Setosa");
      const btnVersicolor = createStyledButton("Versicolor");
      const btnVirginica = createStyledButton("Virginica");
      const btnPetalGT5 = createStyledButton("Petal Length > 5");
      const btnToggleAnimation = createStyledButton("Stop");
  
      document.body.appendChild(btnAll);
      document.body.appendChild(btnSetosa);
      document.body.appendChild(btnVersicolor);
      document.body.appendChild(btnVirginica);
      document.body.appendChild(btnPetalGT5);
      document.body.appendChild(btnToggleAnimation);
  
      const canvas = document.createElement("canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.display = 'block';
      canvas.style.marginTop = '10px';
      document.body.appendChild(canvas);
      const ctx = canvas.getContext("2d");
  
      const infoPanel = document.createElement("div");
      infoPanel.style.position = 'absolute';
      infoPanel.style.top = '20px';
      infoPanel.style.right = '20px';
      infoPanel.style.padding = '12px';
      infoPanel.style.background = 'rgba(255,255,255,0.95)';
      infoPanel.style.border = '1px solid #aaa';
      infoPanel.style.fontSize = '18px';
      infoPanel.style.lineHeight = '1.8';
      infoPanel.style.fontFamily = 'Roboto, sans-serif';
      infoPanel.style.display = 'none';
      infoPanel.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
      document.body.appendChild(infoPanel);
  
      let displayData = irisesWithColorsSorted;
      let irises = [];
  
      function updateIrisObjects(dataArray) {
        irises = dataArray.map((iris, i) => {
          return new Iris(iris, 40 + i * 10, canvas.height / 2);
        });
      }
  
      updateIrisObjects(displayData);
  
      btnAll.onclick = () => {
        displayData = irisesWithColorsSorted;
        updateIrisObjects(displayData);
      };
      btnSetosa.onclick = () => {
        displayData = irisesWithColorsSorted.filter(i => i.species === "setosa");
        updateIrisObjects(displayData);
      };
      btnVersicolor.onclick = () => {
        displayData = irisesWithColorsSorted.filter(i => i.species === "versicolor");
        updateIrisObjects(displayData);
      };
      btnVirginica.onclick = () => {
        displayData = irisesWithColorsSorted.filter(i => i.species === "virginica");
        updateIrisObjects(displayData);
      };
      btnPetalGT5.onclick = () => {
        displayData = irisesWithColorsSorted.filter(i => i.petalLength > 5);
        updateIrisObjects(displayData);
      };
      btnToggleAnimation.onclick = () => {
        animateMotion = !animateMotion;
        btnToggleAnimation.textContent = btnToggleAnimation.textContent === 'Stop' ? 'Start' : 'Stop';
      };
  
      let mouse = { x: 0, y: 0 };
      canvas.addEventListener("mousemove", e => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      });
  
      function animate(time) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let hoveredIris = null;
  
        irises.forEach(iris => {
          const hovered = iris.isHovered(mouse.x, mouse.y, time * 0.01, animateMotion);
          if (!hoveredIris && hovered) {
            hoveredIris = iris;
          }
          iris.draw(ctx, time * 0.01, hovered && iris === hoveredIris, animateMotion);
        });
  
        if (hoveredIris) {
          const d = hoveredIris.data;
          infoPanel.innerHTML = `
            <strong>Species:</strong> ${d.species}<br>
            <strong>Petal Length:</strong> ${d.petalLength}<br>
            <strong>Petal Width:</strong> ${d.petalWidth}<br>
            <strong>Sepal Length:</strong> ${d.sepalLength}<br>
            <strong>Sepal Width:</strong> ${d.sepalWidth}<br>
          `;
          infoPanel.style.display = 'block';
        } else {
          infoPanel.style.display = 'none';
        }
  
        requestAnimationFrame(animate);
      }
  
      animate(0);
    } catch (error) {
      console.error("Error loading iris.json:", error);
    }
  };
  