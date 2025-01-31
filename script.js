// List items from DOM
const listItem1 = document.getElementById('listItem1');
const listItem2 = document.getElementById('listItem2');
const listItem3 = document.getElementById('listItem3');

// Content to write
const text1 = "• Application “Visual Studio Code” is open";
const text2 = "• The search field contains the text “original”";
const text3 = "• The replace field contains the text “replacement”";

// Function to create a blinking cursor
const createCursor = () => {
    const cursor = document.createElement('span');
    cursor.textContent = '|';
    cursor.classList.add('blinking-cursor');
    return cursor;
};

// Text typing function with cursor control
const textTypingEffect = function(element, text, isLast) {
    return new Promise((resolve) => {
        let i = 0;
        const cursor = createCursor();
        element.appendChild(cursor); // Append cursor to element

        const interval = setInterval(function() {
            if (i < text.length) {
                element.textContent = text.substring(0, i + 1); // Add one character at a time
                element.appendChild(cursor); // Keep cursor at the end
                i++;
            } else {
                clearInterval(interval); // Stop when done typing
                
                if (!isLast) {
                    cursor.remove(); // Remove cursor if it's not the last item
                }

                resolve();
            }
        }, 20); // Typing speed
    });
};

// Function to run animations in sequence with cursor on last element only
const animationSeries = async function() {
    await textTypingEffect(listItem1, text1, false);
    await textTypingEffect(listItem2, text2, false);
    await textTypingEffect(listItem3, text3, true); // Keep cursor on last item
};

// Run animation
animationSeries();
