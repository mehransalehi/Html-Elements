let texts = document.querySelectorAll('.text');

  texts.forEach(text => {
    let content = text.textContent;
    content = content.trim();
    text.textContent = '';
    let index = 0;
    for (const char of content) {
      let span = document.createElement('span');
      span.style.setProperty('--i', index);
      span.textContent = char;
      text.append(span)
      index++;
    }
  });