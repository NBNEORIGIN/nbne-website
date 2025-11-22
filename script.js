// Assessment data
const questions = [
    // Contact info
    {
        type: 'contact',
        title: "Let's Get Started",
        subtitle: "First, we need a few details to personalize your results",
        fields: [
            { name: 'name', label: 'Your Name *', type: 'text', required: true },
            { name: 'email', label: 'Email Address *', type: 'email', required: true },
            { name: 'phone', label: 'Phone Number (Optional)', type: 'tel', required: false }
        ]
    },
    // Best practices (10 questions)
    { type: 'yesno', id: 'bp1', question: 'Do you have clear, visible signage that identifies your business from the street?' },
    { type: 'yesno', id: 'bp2', question: 'Is your signage professionally designed and consistent with your brand?' },
    { type: 'yesno', id: 'bp3', question: 'Is your signage well-lit and visible during evening hours?' },
    { type: 'yesno', id: 'bp4', question: 'Do you have window displays or graphics that showcase your products/services?' },
    { type: 'yesno', id: 'bp5', question: 'Do you have directional or wayfinding signage to guide customers to your location?' },
    { type: 'yesno', id: 'bp6', question: 'Is your signage in good condition (no fading, damage, or outdated information)?' },
    { type: 'yesno', id: 'bp7', question: 'Do you have vehicle graphics or signage on company vehicles?' },
    { type: 'yesno', id: 'bp8', question: 'Do you have signage that communicates your key services or products?' },
    { type: 'yesno', id: 'bp9', question: 'Have you obtained necessary planning permissions for your signage?' },
    { type: 'yesno', id: 'bp10', question: 'Do you regularly update promotional signage for offers, events, or seasonal campaigns?' },
    // Qualifying questions
    {
        type: 'choice',
        id: 'situation',
        question: 'Which best describes your current situation?',
        options: [
            'New business - need signage from scratch',
            'Established business - looking to upgrade existing signage',
            'Expanding/relocating - need new signage for additional location',
            'Rebranding - updating all signage to match new brand identity'
        ]
    },
    {
        type: 'choice',
        id: 'outcome',
        question: "What's your primary goal for the next 90 days?",
        options: [
            'Increase visibility and attract more walk-in customers',
            'Create a professional, branded appearance for my business',
            'Stand out from competitors in my area',
            'Improve wayfinding so customers can find us easily'
        ]
    },
    {
        type: 'choice',
        id: 'obstacle',
        question: "What's the biggest obstacle stopping you?",
        options: [
            "Don't know what type of signage would work best for my business",
            'Concerned about planning permissions and regulations',
            'Budget constraints - need to prioritize the right signage',
            'Current signage is outdated, damaged, or ineffective',
            'Not sure about design, materials, or installation requirements'
        ]
    },
    {
        type: 'choice',
        id: 'solution',
        question: 'Which solution would suit you best?',
        options: [
            'Quick Quote & Advice (for specific signage needs)',
            'Site Survey & Consultation (on-site assessment with options)',
            'Full Design & Install Package (complete service)',
            'Comprehensive Signage Strategy (multi-location or major project)'
        ]
    },
    {
        type: 'textarea',
        id: 'notes',
        question: 'Is there anything else we should know?',
        subtitle: 'Optional, but helps us provide better recommendations'
    }
];

let currentQuestion = 0;
let answers = {};

// Start assessment
function startAssessment() {
    document.getElementById('assessment-landing').classList.add('hidden');
    document.getElementById('assessment-questions').classList.remove('hidden');
    renderQuestion();
}

// Render current question
function renderQuestion() {
    const q = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progress').style.width = progress + '%';

    let html = '';
    
    if (q.type === 'contact') {
        html = `<h2>${q.title}</h2>`;
        if (q.subtitle) html += `<p style="color: #6b7280; margin-bottom: 30px;">${q.subtitle}</p>`;
        q.fields.forEach(field => {
            html += `
                <div class="form-group">
                    <label>${field.label}</label>
                    <input type="${field.type}" id="${field.name}" 
                           value="${answers[field.name] || ''}"
                           ${field.required ? 'required' : ''}>
                </div>
            `;
        });
    } else if (q.type === 'yesno') {
        html = `
            <div class="question-number">Question ${currentQuestion} of ${questions.length - 1}</div>
            <h2>${q.question}</h2>
            <div class="options yes-no">
                <button class="option-btn ${answers[q.id] === 'yes' ? 'selected' : ''}" 
                        onclick="selectOption('${q.id}', 'yes')">✓ Yes</button>
                <button class="option-btn ${answers[q.id] === 'no' ? 'selected' : ''}" 
                        onclick="selectOption('${q.id}', 'no')">✗ No</button>
            </div>
        `;
    } else if (q.type === 'choice') {
        html = `
            <div class="question-number">Question ${currentQuestion} of ${questions.length - 1}</div>
            <h2>${q.question}</h2>
            <div class="options">
        `;
        q.options.forEach(option => {
            html += `
                <button class="option-btn ${answers[q.id] === option ? 'selected' : ''}" 
                        onclick="selectOption('${q.id}', \`${option}\`)">
                    ${option}
                </button>
            `;
        });
        html += '</div>';
    } else if (q.type === 'textarea') {
        html = `
            <div class="question-number">Question ${currentQuestion} of ${questions.length - 1}</div>
            <h2>${q.question}</h2>
            ${q.subtitle ? `<p style="color: #6b7280; margin-bottom: 20px;">${q.subtitle}</p>` : ''}
            <div class="form-group">
                <textarea id="notes" rows="5">${answers[q.id] || ''}</textarea>
            </div>
        `;
    }

    document.getElementById('question-content').innerHTML = html;
    document.getElementById('back-btn').style.display = currentQuestion > 0 ? 'block' : 'none';
    document.getElementById('next-btn').textContent = currentQuestion === questions.length - 1 ? 'See My Results' : 'Next →';
}

// Select option
function selectOption(id, value) {
    answers[id] = value;
    renderQuestion();
}

// Next question
function nextQuestion() {
    const q = questions[currentQuestion];
    
    // Validate
    if (q.type === 'contact') {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        if (!name || !email) {
            alert('Please fill in required fields');
            return;
        }
        answers.name = name;
        answers.email = email;
        answers.phone = document.getElementById('phone').value;
    } else if (q.type === 'textarea') {
        answers[q.id] = document.getElementById('notes').value;
    } else if (!answers[q.id] && q.type !== 'textarea') {
        alert('Please select an answer');
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        showResults();
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuestion();
    }
}

// Show results
function showResults() {
    // Calculate score
    let score = 0;
    for (let i = 1; i <= 10; i++) {
        if (answers['bp' + i] === 'yes') score += 10;
    }

    // Determine lead quality
    const isPremium = answers.solution && (
        answers.solution.includes('Full Design') || 
        answers.solution.includes('Comprehensive')
    );
    const leadQuality = (score >= 70 && isPremium) ? 'hot' : 
                       (score >= 40 || answers.solution?.includes('Site Survey')) ? 'warm' : 'cold';

    // Hide questions, show results
    document.getElementById('assessment-questions').classList.add('hidden');
    document.getElementById('assessment-results').classList.remove('hidden');
    
    // Score display
    document.getElementById('score-number').textContent = score + '%';
    const scoreCircle = document.getElementById('score-circle');
    const color = score >= 70 ? '#10b981' : score >= 40 ? '#f59e0b' : '#ef4444';
    scoreCircle.style.background = `conic-gradient(${color} ${score * 3.6}deg, #e5e7eb ${score * 3.6}deg)`;

    // Score message
    let message = '';
    if (score >= 70) {
        message = `
            <h2 style="color: #10b981;">Congratulations! You're Doing Really Well</h2>
            <p>You're already implementing most best practices. Let's help you optimize and take things to the next level.</p>
        `;
    } else if (score >= 40) {
        message = `
            <h2 style="color: #f59e0b;">You Have Strong Foundations</h2>
            <p>You're on the right track, but there's plenty of room for improvement. Let's identify the key areas that will make the biggest impact.</p>
        `;
    } else {
        message = `
            <h2 style="color: #ef4444;">You Have Significant Room for Improvement</h2>
            <p>Don't worry - this is actually great news! Small changes can lead to dramatic improvements in your results.</p>
        `;
    }
    document.getElementById('score-message').innerHTML = message;
    document.getElementById('score-message').style.borderColor = color;

    // Next steps
    let nextSteps = '';
    if (leadQuality === 'hot') {
        nextSteps = `
            <h3>Book Your Free Site Survey</h3>
            <p>Based on your assessment, you're ready for personalized guidance. Let's discuss how we can help you achieve your goals.</p>
            <a href="#contact" class="btn btn-primary" style="background: white; color: #1e3a8a;">
                Schedule Your Free Consultation
            </a>
        `;
    } else if (leadQuality === 'warm') {
        nextSteps = `
            <h3>Get Your Detailed Quote</h3>
            <p>We'd love to provide you with a detailed quote and design options tailored to your specific needs.</p>
            <a href="#contact" class="btn btn-primary" style="background: white; color: #1e3a8a;">
                Request Your Quote
            </a>
        `;
    } else {
        nextSteps = `
            <h3>Browse Our Portfolio</h3>
            <p>Start by exploring our portfolio to see what's possible for businesses like yours.</p>
            <a href="#portfolio" class="btn btn-primary" style="background: white; color: #1e3a8a;">
                View Our Work
            </a>
        `;
    }
    document.getElementById('next-steps').innerHTML = nextSteps;

    // Send data
    sendAssessmentData({ ...answers, score, leadQuality });
    
    // Scroll to results
    document.getElementById('assessment-results').scrollIntoView({ behavior: 'smooth' });
}

// Send assessment data
async function sendAssessmentData(data) {
    console.log('Assessment completed:', data);
    
    try {
        // Determine lead priority and action
        let priority = '';
        let recommendedAction = '';
        
        if (data.leadQuality === 'hot') {
            priority = '🔥 HOT LEAD - HIGH PRIORITY';
            recommendedAction = 'Call within 24 hours - Ready to invest';
        } else if (data.leadQuality === 'warm') {
            priority = '⚡ WARM LEAD - MEDIUM PRIORITY';
            recommendedAction = 'Send detailed quote and portfolio';
        } else {
            priority = '❄️ COLD LEAD - LOW PRIORITY';
            recommendedAction = 'Send portfolio and educational content';
        }
        
        // Prepare data for Web3Forms
        const formData = new FormData();
        formData.append('access_key', '39601d55-1403-4eb3-a0dd-2524c804ad4c');
        formData.append('subject', `${priority} - Assessment Completed`);
        formData.append('from_name', 'NBNE Signs Assessment Tool');
        
        // Add prominent lead info at the top
        formData.append('LEAD_PRIORITY', priority);
        formData.append('LEAD_QUALITY', data.leadQuality.toUpperCase());
        formData.append('SCORE', `${data.score}/75 (${Math.round((data.score / 75) * 100)}%)`);
        formData.append('RECOMMENDED_ACTION', recommendedAction);
        formData.append('---', '--- ASSESSMENT ANSWERS ---');
        
        // Add all answers
        Object.keys(data).forEach(key => {
            if (key !== 'score' && key !== 'leadQuality') {
                formData.append(key, data[key]);
            }
        });
        
        // Send to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            console.log('Assessment data sent successfully');
        } else {
            console.error('Failed to send assessment data:', result.message);
        }
    } catch (error) {
        console.error('Error sending assessment data:', error);
    }
}

// Contact form handling with Web3Forms
document.getElementById('contact-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    const successDiv = document.getElementById('form-success');
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
            // Show success message
            form.style.display = 'none';
            successDiv.style.display = 'block';
            
            // Scroll to success message
            successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reset form after 3 seconds
            setTimeout(() => {
                form.reset();
                form.style.display = 'block';
                successDiv.style.display = 'none';
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 5000);
        } else {
            throw new Error(result.message || 'Form submission failed');
        }
    } catch (error) {
        alert('Oops! There was a problem sending your message. Please email us directly at toby@nbnesigns.com');
        console.error('Form submission error:', error);
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Mobile menu toggle
document.getElementById('mobile-menu-btn')?.addEventListener('click', function() {
    const menu = document.getElementById('nav-menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Testimonials Carousel
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const dotsContainer = document.getElementById('carousel-dots');
    
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;
    
    const cards = track.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    let currentIndex = 0;
    
    // Create dots
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('div');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        const cardWidth = cards[0].offsetWidth;
        track.scrollTo({
            left: cardWidth * index,
            behavior: 'smooth'
        });
        updateDots();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        goToSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        goToSlide(currentIndex);
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Update dots on scroll
    track.addEventListener('scroll', function() {
        const cardWidth = cards[0].offsetWidth;
        const scrollPosition = track.scrollLeft;
        const newIndex = Math.round(scrollPosition / cardWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateDots();
        }
    });
    
    // Auto-advance carousel every 7 seconds
    setInterval(nextSlide, 7000);
});

// Portfolio Carousel
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('portfolio-track');
    const prevBtn = document.getElementById('portfolio-prev');
    const nextBtn = document.getElementById('portfolio-next');
    const dotsContainer = document.getElementById('portfolio-dots');
    
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;
    
    const slides = track.querySelectorAll('.portfolio-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;
    
    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('portfolio-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    const dots = dotsContainer.querySelectorAll('.portfolio-dot');
    
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        const slideWidth = slides[0].offsetWidth;
        track.scrollTo({
            left: slideWidth * index,
            behavior: 'smooth'
        });
        updateDots();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        goToSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        goToSlide(currentIndex);
    }
    
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Update dots on scroll
    track.addEventListener('scroll', function() {
        const slideWidth = slides[0].offsetWidth;
        const scrollPosition = track.scrollLeft;
        const newIndex = Math.round(scrollPosition / slideWidth);
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            updateDots();
        }
    });
    
    // Auto-advance portfolio every 8 seconds
    setInterval(nextSlide, 8000);
});
