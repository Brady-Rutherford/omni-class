// Student Note-Taking App with AI Integration
class NoteTakingApp {
    constructor() {
        this.currentMode = 'research'; // 'research' or 'generation'
        this.expandedBox = null;
        this.notes = '';
        this.classes = [
            { 
                name: 'CS110 LESSON 1', 
                status: 'Completed', 
                notes: `# CS110 Lesson 1: Introduction to Programming

## What is Programming?
Programming is the process of creating instructions for computers to follow. These instructions are written in programming languages that humans can understand and computers can execute.

## Key Concepts:
- **Algorithm**: A step-by-step procedure for solving a problem
- **Program**: A set of instructions that tells a computer what to do
- **Programming Language**: A formal language designed to communicate instructions to a computer
- **Syntax**: The rules that define the structure of a programming language

## Types of Programming Languages:
1. **High-level languages** (Python, Java, C++): Easier for humans to read and write
2. **Low-level languages** (Assembly): Closer to machine code, harder to read
3. **Machine code**: Binary instructions that computers understand directly

## Problem-Solving Process:
1. Understand the problem
2. Plan the solution (algorithm)
3. Write the code
4. Test and debug
5. Refine and optimize

## Programming Environment:
- **IDE (Integrated Development Environment)**: Software that provides tools for writing, testing, and debugging code
- **Compiler/Interpreter**: Converts human-readable code into machine-executable instructions
- **Debugger**: Tool for finding and fixing errors in code

## First Program Example (Python):
\`\`\`python
print("Hello, World!")
\`\`\`

This simple program demonstrates:
- Output: Displaying text to the user
- Syntax: Proper formatting of code
- Execution: Running the program` 
            },
            { 
                name: 'CS110 LESSON 2', 
                status: 'Completed', 
                notes: `# CS110 Lesson 2: Variables and Data Types

## Variables
Variables are containers that store data values. They have a name and can hold different types of information.

### Variable Declaration:
- **Python**: \`name = "John"\` (no explicit declaration needed)
- **Java**: \`String name = "John";\`
- **C++**: \`string name = "John";\`

## Data Types

### 1. Numeric Types:
- **Integer (int)**: Whole numbers (1, 42, -5)
- **Float**: Decimal numbers (3.14, 2.0, -1.5)
- **Double**: Higher precision decimal numbers

### 2. Text Types:
- **String**: Sequence of characters ("Hello", "CS110")
- **Character (char)**: Single character ('A', '!')

### 3. Boolean:
- **Boolean (bool)**: True or False values
- Used for logical operations and conditions

### 4. Collections:
- **Array/List**: Ordered collection of items
- **Dictionary/Map**: Key-value pairs

## Variable Naming Rules:
1. Must start with a letter or underscore
2. Can contain letters, numbers, and underscores
3. Cannot use reserved words (if, while, for, etc.)
4. Case-sensitive (age ≠ Age)

## Good Naming Conventions:
- Use descriptive names: \`studentName\` instead of \`s\`
- Use camelCase: \`firstName\`, \`lastName\`
- Use constants for unchanging values: \`MAX_STUDENTS\`

## Examples:
\`\`\`python
# Variables and data types
student_name = "Alice"        # String
student_age = 20             # Integer
gpa = 3.75                  # Float
is_enrolled = True          # Boolean
grades = [85, 92, 78]       # List
\`\`\`

## Type Conversion:
- **Implicit**: Automatic conversion (int + float = float)
- **Explicit**: Manual conversion using functions
  - \`int()\`, \`float()\`, \`str()\`, \`bool()\`` 
            },
            { 
                name: 'CS110 LESSON 3', 
                status: 'Completed', 
                notes: `# CS110 Lesson 3: Control Structures and Loops

## Control Structures
Control structures determine the flow of program execution based on conditions.

## Conditional Statements

### If Statement:
\`\`\`python
if condition:
    # code to execute if condition is True
    print("Condition is true")
\`\`\`

### If-Else Statement:
\`\`\`python
if grade >= 70:
    print("Pass")
else:
    print("Fail")
\`\`\`

### If-Elif-Else Statement:
\`\`\`python
if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
else:
    print("F")
\`\`\`

## Comparison Operators:
- **==**: Equal to
- **!=**: Not equal to
- **<**: Less than
- **>**: Greater than
- **<=**: Less than or equal to
- **>=**: Greater than or equal to

## Logical Operators:
- **and**: Both conditions must be true
- **or**: At least one condition must be true
- **not**: Reverses the condition

## Loops

### For Loop:
Used when you know how many times to repeat:
\`\`\`python
for i in range(5):
    print(f"Count: {i}")
\`\`\`

### While Loop:
Used when you don't know how many times to repeat:
\`\`\`python
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1
\`\`\`

### Loop Control:
- **break**: Exit the loop immediately
- **continue**: Skip to next iteration
- **pass**: Do nothing (placeholder)

## Nested Structures:
You can put loops and conditions inside other loops and conditions:
\`\`\`python
for i in range(3):
    for j in range(3):
        if i == j:
            print(f"Diagonal: ({i}, {j})")
        else:
            print(f"Position: ({i}, {j})")
\`\`\`

## Common Patterns:
1. **Input validation**: Check user input before processing
2. **Menu systems**: Repeat until user chooses to exit
3. **Data processing**: Iterate through collections
4. **Error handling**: Retry operations until successful` 
            },
            { 
                name: 'CS110 LESSON 4', 
                status: 'Completed', 
                notes: `# CS110 Lesson 4: Functions and Scope

## Functions
Functions are reusable blocks of code that perform specific tasks. They help organize code and avoid repetition.

## Function Definition:
\`\`\`python
def function_name(parameters):
    """Documentation string"""
    # function body
    return value  # optional
\`\`\`

## Function Components:
- **def**: Keyword to define a function
- **function_name**: Name of the function (follow naming conventions)
- **parameters**: Input values (optional)
- **return**: Output value (optional)
- **docstring**: Documentation explaining what the function does

## Example Functions:

### Simple Function:
\`\`\`python
def greet():
    print("Hello, World!")

greet()  # Call the function
\`\`\`

### Function with Parameters:
\`\`\`python
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")
\`\`\`

### Function with Return Value:
\`\`\`python
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)  # Output: 8
\`\`\`

## Parameter Types:

### Positional Parameters:
\`\`\`python
def calculate_area(length, width):
    return length * width

area = calculate_area(10, 5)  # length=10, width=5
\`\`\`

### Keyword Parameters:
\`\`\`python
area = calculate_area(width=5, length=10)  # Order doesn't matter
\`\`\`

### Default Parameters:
\`\`\`python
def greet_person(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet_person("Bob")  # Uses default "Hello"
greet_person("Bob", "Hi")  # Uses "Hi"
\`\`\`

## Scope
Scope determines where variables can be accessed in your code.

### Local Scope:
Variables defined inside a function are local to that function:
\`\`\`python
def my_function():
    local_var = "I'm local"
    print(local_var)

my_function()
# print(local_var)  # Error! local_var not accessible here
\`\`\`

### Global Scope:
Variables defined outside functions are global:
\`\`\`python
global_var = "I'm global"

def my_function():
    print(global_var)  # Can access global variables

my_function()
print(global_var)  # Can access global variables
\`\`\`

### Modifying Global Variables:
\`\`\`python
counter = 0

def increment():
    global counter
    counter += 1

increment()
print(counter)  # Output: 1
\`\`\`

## Best Practices:
1. **Single Responsibility**: Each function should do one thing well
2. **Descriptive Names**: Function names should clearly indicate their purpose
3. **Documentation**: Use docstrings to explain what functions do
4. **Avoid Global Variables**: Use parameters and return values instead
5. **Keep Functions Small**: Easier to understand and debug` 
            }
        ];
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateToggleUI();
        this.loadNotes();
    }

    setupEventListeners() {
        // AI Box expand/collapse functionality
        document.getElementById('expandResearch').addEventListener('click', () => {
            this.toggleBox('research');
        });

        document.getElementById('expandGeneration').addEventListener('click', () => {
            this.toggleBox('generation');
        });

        // AI prompt submission
        document.getElementById('askResearch').addEventListener('click', () => {
            this.handleAIRequest('research');
        });

        document.getElementById('askGeneration').addEventListener('click', () => {
            this.handleAIRequest('generation');
        });

        // Copy AI responses to notes
        document.getElementById('useResearchResponse').addEventListener('click', () => {
            this.copyToNotes('research');
        });

        document.getElementById('useGenerationResponse').addEventListener('click', () => {
            this.copyToNotes('generation');
        });

        // Toggle switch
        document.getElementById('aiToggle').addEventListener('click', () => {
            this.toggleMode();
        });

        // Finalize notes button
        document.getElementById('finalizeNotes').addEventListener('click', () => {
            this.finalizeNotes();
        });

        // Auto-save notes as user types
        document.getElementById('notesTextarea').addEventListener('input', (e) => {
            this.notes = e.target.value;
            this.saveNotes();
        });

        // Make class items clickable
        this.setupClassClickListeners();

        // Add new class functionality
        this.setupAddClassListeners();

        // Enter key support for AI prompts
        document.getElementById('researchPrompt').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.handleAIRequest('research');
            }
        });

        document.getElementById('generationPrompt').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && e.ctrlKey) {
                this.handleAIRequest('generation');
            }
        });
    }

    toggleBox(boxType) {
        const box = document.getElementById(`${boxType}Box`);
        const expandBtn = document.getElementById(`expand${boxType.charAt(0).toUpperCase() + boxType.slice(1)}`);
        
        if (this.expandedBox === boxType) {
            // Collapse the box
            box.classList.remove('expanded');
            expandBtn.textContent = '+';
            this.expandedBox = null;
        } else {
            // Collapse any previously expanded box
            if (this.expandedBox) {
                const prevBox = document.getElementById(`${this.expandedBox}Box`);
                const prevBtn = document.getElementById(`expand${this.expandedBox.charAt(0).toUpperCase() + this.expandedBox.slice(1)}`);
                prevBox.classList.remove('expanded');
                prevBtn.textContent = '+';
            }
            
            // Expand the new box
            box.classList.add('expanded');
            expandBtn.textContent = '−';
            this.expandedBox = boxType;
        }
    }

    toggleMode() {
        this.currentMode = this.currentMode === 'research' ? 'generation' : 'research';
        this.updateToggleUI();
    }

    updateToggleUI() {
        const toggle = document.getElementById('aiToggle');
        const researchBox = document.getElementById('researchBox');
        const generationBox = document.getElementById('generationBox');
        
        if (this.currentMode === 'research') {
            toggle.classList.remove('active');
            researchBox.style.display = 'block';
            generationBox.style.display = 'none';
        } else {
            toggle.classList.add('active');
            researchBox.style.display = 'none';
            generationBox.style.display = 'block';
        }
    }

    async handleAIRequest(type) {
        const promptTextarea = document.getElementById(`${type}Prompt`);
        const responseDiv = document.getElementById(`${type}Response`);
        const askBtn = document.getElementById(`ask${type.charAt(0).toUpperCase() + type.slice(1)}`);
        const useBtn = document.getElementById(`use${type.charAt(0).toUpperCase() + type.slice(1)}Response`);
        
        const prompt = promptTextarea.value.trim();
        if (!prompt) {
            alert('Please enter a prompt first!');
            return;
        }

        // Show loading state
        askBtn.innerHTML = '<div class="loading"></div>';
        askBtn.disabled = true;
        responseDiv.innerHTML = '<div class="loading"></div> Processing your request...';

        try {
            // Call the real backend API
            const response = await this.callBackendAPI(prompt, type);
            
            responseDiv.innerHTML = response;
            useBtn.style.display = 'block';
            
        } catch (error) {
            console.error('AI Request Error:', error);
            responseDiv.innerHTML = this.getErrorResponse(type, error);
            useBtn.style.display = 'none';
        } finally {
            // Reset button
            askBtn.innerHTML = 'Ask';
            askBtn.disabled = false;
            
            // Clear the prompt
            promptTextarea.value = '';
        }
    }

    async callBackendAPI(prompt, type) {
        const API_BASE_URL = 'http://localhost:3001/api';
        const endpoint = type === 'research' ? 'research' : 'generation';
        
        const response = await fetch(`${API_BASE_URL}/ai/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.response || data.fallback || 'No response received';
    }

    getErrorResponse(type, error) {
        const errorMessage = error.message || 'Unknown error occurred';
        
        if (type === 'research') {
            return `<h4>Research Error:</h4>
                <div style="background: #fee; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #e53e3e;">
                    <p><strong>Error:</strong> ${errorMessage}</p>
                    <p>This might be due to:</p>
                    <ul>
                        <li>Backend server not running (start with: npm start)</li>
                        <li>Network connectivity issues</li>
                        <li>API rate limiting</li>
                    </ul>
                </div>
                <p><em>Please try again or check your connection.</em></p>`;
        } else {
            return `<h4>Generation Error:</h4>
                <div style="background: #fee; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #e53e3e;">
                    <p><strong>Error:</strong> ${errorMessage}</p>
                    <p>This might be due to:</p>
                    <ul>
                        <li>Backend server not running (start with: npm start)</li>
                        <li>Network connectivity issues</li>
                        <li>API rate limiting</li>
                    </ul>
                </div>
                <p><em>Please try again or check your connection.</em></p>`;
        }
    }

    generateAIResponse(type, prompt) {
        if (type === 'research') {
            return this.generateResearchResponse(prompt);
        } else {
            return this.generateGenerationResponse(prompt);
        }
    }

    generateResearchResponse(prompt) {
        const researchResponses = {
            'what is': `<h4>Research Summary:</h4>
                <p><strong>Definition:</strong> Based on current academic sources and recent studies...</p>
                <ul>
                    <li><strong>Key Concept 1:</strong> Detailed explanation with supporting evidence</li>
                    <li><strong>Key Concept 2:</strong> Additional research findings and examples</li>
                    <li><strong>Recent Developments:</strong> Latest research from 2023-2024</li>
                </ul>
                <p><strong>Sources:</strong> Academic papers, peer-reviewed journals, and verified databases</p>
                <p><em>This information is synthesized from multiple reliable research sources.</em></p>`,
            
            'how to': `<h4>Research-Based Guide:</h4>
                <p><strong>Methodology:</strong> Based on established research protocols...</p>
                <ol>
                    <li><strong>Step 1:</strong> Research-backed approach with citations</li>
                    <li><strong>Step 2:</strong> Evidence-based methodology</li>
                    <li><strong>Step 3:</strong> Verified techniques from studies</li>
                </ol>
                <p><strong>Research Notes:</strong> This approach has been validated in multiple studies...</p>
                <p><em>Information gathered from academic databases and research institutions.</em></p>`,
            
            'explain': `<h4>Comprehensive Research Analysis:</h4>
                <p><strong>Overview:</strong> Based on extensive research literature...</p>
                <div style="background: #f0f8ff; padding: 10px; border-left: 4px solid #667eea; margin: 10px 0;">
                    <strong>Key Research Findings:</strong>
                    <ul>
                        <li>Finding 1 with supporting data</li>
                        <li>Finding 2 with statistical evidence</li>
                        <li>Finding 3 with case study examples</li>
                    </ul>
                </div>
                <p><strong>Implications:</strong> Research suggests that...</p>
                <p><em>Sources: Academic journals, research databases, peer-reviewed studies</em></p>`
        };

        // Find matching response or use default
        for (const [key, response] of Object.entries(researchResponses)) {
            if (prompt.toLowerCase().includes(key)) {
                return response;
            }
        }

        return `<h4>Research Results:</h4>
            <p><strong>Topic:</strong> ${prompt}</p>
            <p>Based on current research and academic sources, here's what I found:</p>
            <ul>
                <li><strong>Primary Finding:</strong> Research-backed information with citations</li>
                <li><strong>Secondary Finding:</strong> Additional evidence from studies</li>
                <li><strong>Methodology:</strong> How this research was conducted</li>
            </ul>
            <p><strong>Sources:</strong> Academic databases, peer-reviewed journals, research institutions</p>
            <p><em>This information is compiled from verified research sources.</em></p>`;
    }

    generateGenerationResponse(prompt) {
        const generationResponses = {
            'write': `<h4>Generated Content:</h4>
                <p>Here's a well-structured response to your request:</p>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <p><strong>Introduction:</strong> Clear opening statement that addresses your prompt...</p>
                    <p><strong>Main Points:</strong></p>
                    <ul>
                        <li>Point 1: Detailed explanation with examples</li>
                        <li>Point 2: Additional insights and analysis</li>
                        <li>Point 3: Practical applications or implications</li>
                    </ul>
                    <p><strong>Conclusion:</strong> Summary and key takeaways</p>
                </div>
                <p><em>This content is generated to help you with your notes and understanding.</em></p>`,
            
            'create': `<h4>Creative Response:</h4>
                <p>Here's a creative approach to your request:</p>
                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h5>Generated Ideas:</h5>
                    <ol>
                        <li><strong>Idea 1:</strong> Creative concept with implementation details</li>
                        <li><strong>Idea 2:</strong> Alternative approach with benefits</li>
                        <li><strong>Idea 3:</strong> Innovative solution with examples</li>
                    </ol>
                </div>
                <p><strong>Implementation Tips:</strong> Practical advice for applying these ideas</p>
                <p><em>Generated content designed to inspire and assist your learning.</em></p>`,
            
            'help': `<h4>Assistance Response:</h4>
                <p>I'm here to help! Here's how I can assist you:</p>
                <div style="background: #d1ecf1; padding: 15px; border-radius: 8px; margin: 10px 0;">
                    <h5>Ways I Can Help:</h5>
                    <ul>
                        <li><strong>Clarification:</strong> Breaking down complex concepts</li>
                        <li><strong>Examples:</strong> Providing relevant examples and analogies</li>
                        <li><strong>Structure:</strong> Organizing information logically</li>
                        <li><strong>Practice:</strong> Suggesting exercises and applications</li>
                    </ul>
                </div>
                <p><strong>Next Steps:</strong> Specific actions you can take to improve your understanding</p>
                <p><em>Generated to provide personalized assistance for your learning needs.</em></p>`
        };

        // Find matching response or use default
        for (const [key, response] of Object.entries(generationResponses)) {
            if (prompt.toLowerCase().includes(key)) {
                return response;
            }
        }

        return `<h4>Generated Response:</h4>
            <p>Here's a comprehensive response to help with your request:</p>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 10px 0;">
                <p><strong>Understanding:</strong> ${prompt}</p>
                <p><strong>Response:</strong></p>
                <ul>
                    <li>Detailed explanation with examples</li>
                    <li>Additional insights and context</li>
                    <li>Practical applications and tips</li>
                </ul>
            </div>
            <p><strong>Key Takeaways:</strong> Summary of important points</p>
            <p><em>This response is generated to enhance your learning and note-taking.</em></p>`;
    }

    copyToNotes(type) {
        const responseDiv = document.getElementById(`${type}Response`);
        const notesTextarea = document.getElementById('notesTextarea');
        
        // Extract text content from the response
        const responseText = responseDiv.innerText || responseDiv.textContent;
        
        // Add to notes with a separator
        const separator = '\n\n--- AI Response ---\n';
        const currentNotes = notesTextarea.value;
        
        if (currentNotes.trim()) {
            notesTextarea.value = currentNotes + separator + responseText;
        } else {
            notesTextarea.value = responseText;
        }
        
        // Update the notes property
        this.notes = notesTextarea.value;
        this.saveNotes();
        
        // Show success message
        this.showSuccessMessage('AI response added to your notes!');
        
        // Hide the use button
        document.getElementById(`use${type.charAt(0).toUpperCase() + type.slice(1)}Response`).style.display = 'none';
    }

    finalizeNotes() {
        const notesTextarea = document.getElementById('notesTextarea');
        const notes = notesTextarea.value.trim();
        
        if (!notes) {
            alert('Please add some notes before finalizing!');
            return;
        }

        // Add current lesson to classes
        const currentLesson = {
            name: 'CS110 LESSON 5',
            status: 'Completed',
            notes: notes,
            finalizedAt: new Date().toISOString()
        };
        
        this.classes.push(currentLesson);
        this.updateClassesDisplay();
        
        // Clear the notes
        notesTextarea.value = '';
        this.notes = '';
        this.saveNotes();
        
        // Show success message
        this.showSuccessMessage('Notes finalized and saved to your classes!');
        
        // Update lesson header to next lesson
        const lessonHeader = document.querySelector('.lesson-header h2');
        lessonHeader.textContent = 'CS110 LESSON 6';
    }

    updateClassesDisplay() {
        const classesContent = document.querySelector('.classes-box .box-content');
        classesContent.innerHTML = '';
        
        this.classes.forEach(classItem => {
            const classDiv = document.createElement('div');
            classDiv.className = 'class-item';
            classDiv.innerHTML = `
                <span class="class-name">${classItem.name}</span>
                <span class="class-status">${classItem.status}</span>
            `;
            classesContent.appendChild(classDiv);
        });
    }

    showSuccessMessage(message) {
        // Remove any existing success messages
        const existingMessage = document.querySelector('.success-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new success message
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.textContent = message;
        
        // Add to the notes actions area
        const notesActions = document.querySelector('.notes-actions');
        notesActions.appendChild(successDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }

    saveNotes() {
        localStorage.setItem('cs110-lesson5-notes', this.notes);
    }

    loadNotes() {
        const savedNotes = localStorage.getItem('cs110-lesson5-notes');
        if (savedNotes) {
            this.notes = savedNotes;
            document.getElementById('notesTextarea').value = savedNotes;
        }
    }

    setupClassClickListeners() {
        // Add click listeners to class items
        const classItems = document.querySelectorAll('.class-item');
        classItems.forEach((item, index) => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', () => {
                this.loadLessonNotes(index);
            });
        });
    }

    loadLessonNotes(lessonIndex) {
        if (lessonIndex >= 0 && lessonIndex < this.classes.length) {
            const lesson = this.classes[lessonIndex];
            
            // Update the lesson header
            const lessonHeader = document.querySelector('.lesson-header h2');
            lessonHeader.textContent = lesson.name;
            
            // Load the lesson notes into the textarea
            const notesTextarea = document.getElementById('notesTextarea');
            notesTextarea.value = lesson.notes;
            this.notes = lesson.notes;
            
            // Update localStorage key based on current lesson
            const lessonNumber = lesson.name.split(' ')[2]; // Extract lesson number
            localStorage.setItem(`cs110-lesson${lessonNumber}-notes`, lesson.notes);
            
            // Show success message
            this.showSuccessMessage(`Loaded ${lesson.name} notes!`);
            
            // Scroll to top of notes area
            notesTextarea.scrollTop = 0;
        }
    }

    updateClassesDisplay() {
        const classesContent = document.querySelector('.classes-box .box-content');
        classesContent.innerHTML = '';
        
        this.classes.forEach((classItem, index) => {
            const classDiv = document.createElement('div');
            classDiv.className = 'class-item';
            const statusClass = classItem.status === 'Completed' ? 'completed' : 'in-progress';
            classDiv.innerHTML = `
                <span class="class-name">${classItem.name}</span>
                <span class="class-status ${statusClass}">${classItem.status}</span>
            `;
            
            // Add click listener to each class item
            classDiv.style.cursor = 'pointer';
            classDiv.addEventListener('click', () => {
                this.loadLessonNotes(index);
            });
            
            classesContent.appendChild(classDiv);
        });
        
        // Add the "Add New Class" button
        const addClassDiv = document.createElement('div');
        addClassDiv.className = 'add-class-item';
        addClassDiv.id = 'addNewClass';
        addClassDiv.innerHTML = '<span class="add-class-text">+ Add New Class</span>';
        
        // Add click listener to the add button
        addClassDiv.addEventListener('click', () => {
            this.showAddClassModal();
        });
        
        classesContent.appendChild(addClassDiv);
    }

    setupAddClassListeners() {
        // Add click listener to the existing "Add New Class" button
        const addNewClassBtn = document.getElementById('addNewClass');
        if (addNewClassBtn) {
            addNewClassBtn.addEventListener('click', () => {
                this.showAddClassModal();
            });
        }

        // Modal event listeners
        const modal = document.getElementById('addClassModal');
        const closeModal = document.getElementById('closeModal');
        const cancelBtn = document.getElementById('cancelAddClass');
        const confirmBtn = document.getElementById('confirmAddClass');

        // Close modal events
        closeModal.addEventListener('click', () => this.hideAddClassModal());
        cancelBtn.addEventListener('click', () => this.hideAddClassModal());
        
        // Click outside modal to close
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.hideAddClassModal();
            }
        });

        // Confirm add class
        confirmBtn.addEventListener('click', () => {
            this.addNewClass();
        });

        // Enter key to submit form
        document.getElementById('addClassForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.addNewClass();
        });
    }

    showAddClassModal() {
        const modal = document.getElementById('addClassModal');
        modal.classList.add('active');
        
        // Focus on the first input
        setTimeout(() => {
            document.getElementById('className').focus();
        }, 100);
    }

    hideAddClassModal() {
        const modal = document.getElementById('addClassModal');
        modal.classList.remove('active');
        
        // Clear form
        document.getElementById('addClassForm').reset();
    }

    addNewClass() {
        const className = document.getElementById('className').value.trim();
        const classSubject = document.getElementById('classSubject').value;
        const classNotes = document.getElementById('classNotes').value.trim();

        if (!className) {
            alert('Please enter a class name!');
            return;
        }

        // Create new class object
        const newClass = {
            name: className,
            status: 'In Progress',
            notes: classNotes || `# ${className}\n\n## Notes\n\nStart taking notes for ${className}...`,
            createdAt: new Date().toISOString()
        };

        // Add to classes array
        this.classes.push(newClass);

        // Update the display
        this.updateClassesDisplay();

        // Load the new class notes
        this.loadLessonNotes(this.classes.length - 1);

        // Hide modal
        this.hideAddClassModal();

        // Show success message
        this.showSuccessMessage(`${className} has been added successfully!`);
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new NoteTakingApp();
});

// Add some helpful keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + S to save notes
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        document.getElementById('finalizeNotes').click();
    }
    
    // Ctrl/Cmd + Enter to ask AI (when focused on prompt)
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.id === 'researchPrompt') {
            e.preventDefault();
            document.getElementById('askResearch').click();
        } else if (activeElement.id === 'generationPrompt') {
            e.preventDefault();
            document.getElementById('askGeneration').click();
        }
    }
});
