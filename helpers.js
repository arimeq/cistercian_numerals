function generateSVG() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttributeNS(null, 'width', '100');
  svg.setAttributeNS(null, 'height', '180');
  svg.setAttributeNS(null, 'version', '1.1');
  const mainRect = createRect(48, 0, 4, 180);
  svg.appendChild(mainRect);
  return svg;
}

function createRect(x, y, width, height, rotate) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  rect.setAttributeNS(null, 'width', width);
  rect.setAttributeNS(null, 'height', height);
  rect.setAttributeNS(null, 'x', x);
  rect.setAttributeNS(null, 'y', y);
  rect.setAttributeNS(null, 'fill', 'black');
  if (rotate) {
    rect.setAttributeNS(null, 'transform', `rotate(${rotate.deg}, ${rotate.x}, ${rotate.y})`);
  }
  return rect;
}

function mixSingles(svg, number) {
  const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  group.id = 'singles';
  switch (Number(number)) {
    case 0:
      return;
    case 1:
      group.append(
        createRect(48, 0, 50, 4)
      );
      break;
    case 2:
      group.append(
        createRect(48, 46, 50, 4)
      );
      break;
    case 3:
      group.append(
        createRect(52, 0, 66, 4, { deg: 45, x: 52, y: 0 })
      );
    break;
    case 4:
      group.append(
        createRect(100, 0, 66, 4, { deg: 135, x: 99, y: 2 })
      );
    break;
    case 5:
      group.append(
        createRect(100, 0, 66, 4, { deg: 135, x: 99, y: 2 }),
        createRect(50, 0, 50, 4)
      );
    break;
    case 6:
      group.append(
        createRect(96, 0, 4, 50)
      );
    break;
    case 7:
      group.append(
        createRect(96, 0, 4, 50),
        createRect(50, 0, 50, 4)
      );
    break;
    case 8:
      group.append(
        createRect(96, 0, 4, 50),
        createRect(50, 46, 50, 4)
      );
    break;
    case 9:
      group.append(
        createRect(96, 0, 4, 50),
        createRect(50, 0, 50, 4),
        createRect(50, 46, 50, 4)
      );
    break;
  }
  svg.appendChild(group);
}

function mixTens(group, number) {
  switch (Number(number)) {
    case 0:
      return;
    case 1:
      group.append(
        createRect(0, 0, 50, 4)
      );
      break;
    case 2:
      group.append(
        createRect(0, 46, 50, 4)
      );
      break;
    case 3:
      group.append(
        createRect(52, 0, 66, 4, { deg: 135, x: 52, y: 0 })
      );
    break;
    case 4:
      group.append(
        createRect(0, 0, 71, 4, { deg: 45, x: 2, y: 0 })
      );
    break;
    case 5:
      group.append(
        createRect(0, 0, 71, 4, { deg: 45, x: 2, y: 0 }),
        createRect(0, 0, 50, 4)
      );
    break;
    case 6:
      group.append(
        createRect(0, 0, 4, 50)
      );
    break;
    case 7:
      group.append(
        createRect(0, 0, 4, 50),
        createRect(0, 0, 50, 4)
      );
    break;
    case 8:
      group.append(
        createRect(0, 0, 4, 50),
        createRect(0, 46, 50, 4)
      );
    break;
    case 9:
      group.append(
        createRect(0, 0, 4, 50),
        createRect(0, 0, 50, 4),
        createRect(0, 46, 50, 4)
      );
    break;
  }
  return group;
}

function mixHundreds(group, number) {
  switch (Number(number)) {
    case 0:
      return;
    case 1:
      group.append(
        createRect(48, 176, 50, 4)
      );
      break;
    case 2:
      group.append(
        createRect(48, 130, 50, 4)
      );
      break;
    case 3:
      group.append(
        createRect(50, 176, 66, 4, { deg: -45, x: 50, y: 178 })
      );
    break;
    case 4:
      group.append(
        createRect(98, 176, 66, 4, { deg: -135, x: 98, y: 178 })
      );
    break;
    case 5:
      group.append(
        createRect(98, 176, 66, 4, { deg: -135, x: 98, y: 178 }),
        createRect(50, 176, 50, 4)
      );
    break;
    case 6:
      group.append(
        createRect(96, 130, 4, 50)
      );
    break;
    case 7:
      group.append(
        createRect(96, 130, 4, 50),
        createRect(50, 176, 50, 4)
      );
    break;
    case 8:
      group.append(
        createRect(96, 130, 4, 50),
        createRect(50, 130, 50, 4)
      );
    break;
    case 9:
      group.append(
        createRect(96, 130, 4, 50),
        createRect(50, 130, 50, 4),
        createRect(50, 176, 50, 4)
      );
    break;
  }
  return group;
}

function mixThousands(group, number) {
  switch (Number(number)) {
    case 0:
      return;
    case 1:
      group.append(
        createRect(0, 176, 50, 4)
      );
      break;
    case 2:
      group.append(
        createRect(0, 130, 50, 4)
      );
      break;
    case 3:
      group.append(
        createRect(2, 130, 66, 4, { deg: 45, x: 2, y: 134 })
      );
    break;
    case 4:
      group.append(
        createRect(2, 176, 66, 4, { deg: -45, x: 2, y: 178 })
      );
    break;
    case 5:
      group.append(
        createRect(2, 176, 66, 4, { deg: -45, x: 2, y: 178 }),
        createRect(0, 176, 50, 4)
      );
    break;
    case 6:
      group.append(
        createRect(0, 130, 4, 50)
      );
    break;
    case 7:
      group.append(
        createRect(0, 130, 4, 50),
        createRect(0, 176, 50, 4)
      );
    break;
    case 8:
      group.append(
        createRect(0, 130, 4, 50),
        createRect(0, 130, 50, 4)
      );
    break;
    case 9:
      group.append(
        createRect(0, 130, 4, 50),
        createRect(0, 130, 50, 4),
        createRect(0, 176, 50, 4)
      );
    break;
  }
  return group;
}

function render(number) {
  if (number > 9999) {
    return;
  }
  const svg = generateSVG();
  const numberAsStringArrayReversed = String(number).split('').reverse();
  mixSingles(svg, numberAsStringArrayReversed.shift());
  mixTens(svg, numberAsStringArrayReversed.shift());
  mixHundreds(svg, numberAsStringArrayReversed.shift());
  mixThousands(svg, numberAsStringArrayReversed.shift());
  renderTarget.innerHTML = '';
  renderTarget.appendChild(svg);
}
