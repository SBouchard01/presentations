document.querySelectorAll('pre code').forEach((block) => {
    const pre = block.parentElement;
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = 'Copy';
    pre.style.position = 'relative';
    pre.appendChild(button);

    // const blockId = block.id ? ` (ID: ${block.id})` : '';
    // console.log('Copy button added to code block. Content:' + block.textContent + blockId);

    button.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(block.textContent);
            button.textContent = 'Copied!';
            button.classList.add('copied');
            setTimeout(() => {
                button.textContent = 'Copy';
                button.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            button.textContent = 'Failed to copy';
        }
    });
});