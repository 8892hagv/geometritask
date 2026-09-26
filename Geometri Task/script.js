        // Exactly 15 Questions Data Map (5 Easy, 5 Medium, 5 Hard)
        const questionsData = [
            // ================= EASY LEVEL (Q1 - Q5) -> 10 Points Each =================
            {
                id: 1,
                level: "Easy",
                points: 10,
                question: "Bangun datar yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku (90°) adalah...",
                options: ["Persegi Panjang", "Persegi", "Jajaran Genjang", "Trapesium"],
                correct: 1,
                explanation: "Persegi memiliki 4 sisi yang kesemuanya sama panjang dan 4 sudut siku-siku 90°.",
                svgType: "square"
            },
            {
                id: 2,
                level: "Easy",
                points: 10,
                question: "Berapakah jumlah bidang sisi yang dimiliki oleh bangun ruang Kubus?",
                options: ["4 Sisi", "6 Sisi", "8 Sisi", "12 Sisi"],
                correct: 1,
                explanation: "Kubus memiliki 6 bidang sisi berbentuk persegi yang sama besar.",
                svgType: "cube"
            },
            {
                id: 3,
                level: "Easy",
                points: 10,
                question: "Bangun ruang yang memiliki alas lingkaran dan satu titik puncak adalah...",
                options: ["Tabung", "Limas Segiempat", "Kerucut", "Bola"],
                correct: 2,
                explanation: "Kerucut mempunyai alas berbentuk lingkaran dan 1 titik puncak melengkung.",
                svgType: "cone"
            },
            {
                id: 4,
                level: "Easy",
                points: 10,
                question: "Berapa jumlah sudut siku-siku pada sebuah Persegi Panjang?",
                options: ["2 Sudut", "3 Sudut", "4 Sudut", "5 Sudut"],
                correct: 2,
                explanation: "Persegi panjang memiliki 4 sudut siku-siku (90°).",
                svgType: "rectangle"
            },
            {
                id: 5,
                level: "Easy",
                points: 10,
                question: "Hitung luas segitiga jika memiliki panjang alas 8 cm dan tinggi 5 cm!",
                options: ["20 cm²", "40 cm²", "13 cm²", "26 cm²"],
                correct: 0,
                explanation: "Luas Segitiga = ½ × alas × tinggi = ½ × 8 × 5 = 20 cm².",
                svgType: "triangle"
            },

            // ================= MEDIUM LEVEL (Q6 - Q10) -> 15 Points Each =================
            {
                id: 6,
                level: "Medium",
                points: 15,
                question: "Sebuah kubus memiliki rusuk 6 cm. Berapakah volume kubus tersebut?",
                options: ["36 cm³", "144 cm³", "216 cm³", "240 cm³"],
                correct: 2,
                explanation: "Volume Kubus = s × s × s = 6 × 6 × 6 = 216 cm³.",
                svgType: "cubeDim"
            },
            {
                id: 7,
                level: "Medium",
                points: 15,
                question: "Balok berukuran panjang 10 cm, lebar 5 cm, dan tinggi 4 cm. Luas permukaannya adalah...",
                options: ["220 cm²", "200 cm²", "110 cm²", "190 cm²"],
                correct: 0,
                explanation: "Luas Permukaan Balok = 2 × (pl + pt + lt) = 2 × (50 + 40 + 20) = 220 cm².",
                svgType: "cuboid"
            },
            {
                id: 8,
                level: "Medium",
                points: 15,
                question: "Bangun ruang yang memiliki 5 sisi (2 alas segitiga, 3 tegak) dan 9 rusuk adalah...",
                options: ["Limas Segitiga", "Prisma Segitiga", "Limas Segiempat", "Prisma Segiempat"],
                correct: 1,
                explanation: "Prisma Segitiga memiliki 2 bidang alas segitiga kongruen dan 3 bidang tegak segiempat (total 5 sisi, 9 rusuk).",
                svgType: "prism"
            },
            {
                id: 9,
                level: "Medium",
                points: 15,
                question: "Sebuah lingkaran dengan jari-jari r = 7 cm. Kelilingnya adalah... (π = 22/7)",
                options: ["22 cm", "44 cm", "154 cm", "88 cm"],
                correct: 1,
                explanation: "Keliling Lingkaran = 2 × π × r = 2 × (22/7) × 7 = 44 cm.",
                svgType: "circle"
            },
            {
                id: 10,
                level: "Medium",
                points: 15,
                question: "Berapa jumlah titik sudut pada bangun ruang Limas Segiempat?",
                options: ["4 Titik Sudut", "5 Titik Sudut", "6 Titik Sudut", "8 Titik Sudut"],
                correct: 1,
                explanation: "Limas Segiempat memiliki 5 titik sudut (4 sudut di alas + 1 sudut puncak).",
                svgType: "pyramid"
            },

            // ================= HARD LEVEL (Q11 - Q15) -> 20 Points Each =================
            {
                id: 11,
                level: "Hard",
                points: 20,
                question: "Tabung memiliki jari-jari r = 7 cm dan tinggi t = 10 cm. Volume tabung adalah... (π = 22/7)",
                options: ["1.540 cm³", "770 cm³", "308 cm³", "1.450 cm³"],
                correct: 0,
                explanation: "Volume Tabung = π × r² × t = (22/7) × 7 × 7 × 10 = 1.540 cm³.",
                svgType: "cylinder"
            },
            {
                id: 12,
                level: "Hard",
                points: 20,
                question: "Bangun gabungan terdiri dari Kubus (rusuk 5 cm) & Balok (5x5x10 cm). Berapa volume totalnya?",
                options: ["250 cm³", "375 cm³", "500 cm³", "125 cm³"],
                correct: 1,
                explanation: "V.Kubus = 5³ = 125 cm³. V.Balok = 5×5×10 = 250 cm³. Total Volume = 125 + 250 = 375 cm³.",
                svgType: "composite"
            },
            {
                id: 13,
                level: "Hard",
                points: 20,
                question: "Jaring-jaring 2 lingkaran kongruen dan 1 persegi panjang jika dirangkai membentuk...",
                options: ["Kerucut", "Bola", "Tabung", "Prisma"],
                correct: 2,
                explanation: "Jaring-jaring tabung terdiri atas dua alas lingkaran dan satu selimut persegi panjang.",
                svgType: "netCylinder"
            },
            {
                id: 14,
                level: "Hard",
                points: 20,
                question: "Limas segiempat beralas persegi (sisi 6 cm) dan tinggi 10 cm. Berapa volumenya?",
                options: ["360 cm³", "180 cm³", "120 cm³", "240 cm³"],
                correct: 2,
                explanation: "Volume Limas = ⅓ × Luas Alas × t = ⅓ × (6 × 6) × 10 = 120 cm³.",
                svgType: "pyramidVol"
            },
            {
                id: 15,
                level: "Hard",
                points: 20,
                question: "Total sudut segitiga adalah 180°. Jika dua sudutnya 90° dan 35°, berapa sudut ketiganya?",
                options: ["45°", "55°", "65°", "75°"],
                correct: 1,
                explanation: "Sudut Ketiga = 180° - (90° + 35°) = 180° - 125° = 55°.",
                svgType: "triangleAngles"
            }
        ];

        let currentQuestionIndex = 0;
        let score = 0;
        let lives = 3;
        let correctAnswersCount = 0;
        let timerInterval = null;
        let timeLeft = 15; // 15 Seconds Timer Per Question
        let audioEnabled = true;
        let userAnswers = []; // Records question history for review

        // Web Audio Synthesizer for lightweight sound effects
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        let audioCtx = null;

        function playSound(type) {
            if (!audioEnabled) return;
            try {
                if (!audioCtx) audioCtx = new AudioContext();
                const osc = audioCtx.createOscillator();
                const gain = audioCtx.createGain();
                osc.connect(gain);
                gain.connect(audioCtx.destination);

                const now = audioCtx.currentTime;
                if (type === 'correct') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(523.25, now);
                    osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.1);
                    osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.2);
                    gain.gain.setValueAtTime(0.2, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                    osc.start(now);
                    osc.stop(now + 0.3);
                } else if (type === 'wrong') {
                    osc.type = 'sawtooth';
                    osc.frequency.setValueAtTime(220, now);
                    osc.frequency.exponentialRampToValueAtTime(130, now + 0.25);
                    gain.gain.setValueAtTime(0.25, now);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
                    osc.start(now);
                    osc.stop(now + 0.3);
                } else if (type === 'tick') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(850, now);
                    gain.gain.setValueAtTime(0.05, now);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                    osc.start(now);
                    osc.stop(now + 0.05);
                }
            } catch (e) {
                console.log("Audio API issue");
            }
        }

        function toggleAudio() {
            audioEnabled = !audioEnabled;
            const soundIcon = document.getElementById('soundIcon');
            const soundText = document.getElementById('soundText');
            if (audioEnabled) {
                soundIcon.className = "fa-solid fa-volume-high text-indigo-500";
                soundText.innerText = "Suara";
            } else {
                soundIcon.className = "fa-solid fa-volume-xmark text-slate-400";
                soundText.innerText = "Mute";
            }
        }

        function confirmGoHome() {
            if (document.getElementById('gameScreen').classList.contains('hidden')) {
                goHome();
            } else {
                if (confirm("Apakah kamu yakin ingin kembali ke Beranda? Progres game kamu akan di-reset.")) {
                    goHome();
                }
            }
        }

        function goHome() {
            clearInterval(timerInterval);
            document.getElementById('gameScreen').classList.add('hidden');
            document.getElementById('resultScreen').classList.add('hidden');
            document.getElementById('welcomeScreen').classList.remove('hidden');
        }

        function startGame() {
            currentQuestionIndex = 0;
            score = 0;
            lives = 3;
            correctAnswersCount = 0;
            userAnswers = Array(questionsData.length).fill(null);

            document.getElementById('welcomeScreen').classList.add('hidden');
            document.getElementById('resultScreen').classList.add('hidden');
            document.getElementById('gameScreen').classList.remove('hidden');

            renderHearts();
            loadQuestion();
        }

        function renderHearts() {
            const container = document.getElementById('heartsContainer');
            container.innerHTML = "";
            for (let i = 0; i < 3; i++) {
                const heart = document.createElement('i');
                if (i < lives) {
                    heart.className = "fa-solid fa-heart text-rose-500 heart-pop";
                } else {
                    heart.className = "fa-regular fa-heart text-slate-300";
                }
                container.appendChild(heart);
            }
        }

        function loadQuestion() {
            const currentQ = questionsData[currentQuestionIndex];

            clearInterval(timerInterval);
            timeLeft = 15; // 15 Seconds Limit
            document.getElementById('explanationBox').classList.add('hidden');
            document.getElementById('nextBtn').disabled = true;

            // Header UI updates
            document.getElementById('currentQuestionNum').innerText = currentQuestionIndex + 1;
            document.getElementById('liveScore').innerText = score;
            document.getElementById('prevBtn').disabled = (currentQuestionIndex === 0);

            // Difficulty Level Badge styling
            const badgeEl = document.getElementById('levelBadge');
            const badgeTextEl = document.getElementById('levelBadgeText');

            if (currentQ.level === "Easy") {
                badgeEl.className = "px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 bg-emerald-100 text-emerald-800 border border-emerald-200";
                badgeTextEl.innerText = "EASY (SOAL 1-5)";
            } else if (currentQ.level === "Medium") {
                badgeEl.className = "px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 bg-amber-100 text-amber-800 border border-amber-200";
                badgeTextEl.innerText = "MEDIUM (SOAL 6-10)";
            } else {
                badgeEl.className = "px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase flex items-center gap-1.5 bg-rose-100 text-rose-800 border border-rose-200";
                badgeTextEl.innerText = "HARD (SOAL 11-15)";
            }

            document.getElementById('pointTag').innerText = `+${currentQ.points} Poin`;
            document.getElementById('questionText').innerText = currentQ.question;

            // Render SVG Diagram
            renderDiagram(currentQ.svgType);

            // Render Option Buttons
            const optionsGrid = document.getElementById('optionsGrid');
            optionsGrid.innerHTML = "";

            const existingRecord = userAnswers[currentQuestionIndex];

            currentQ.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = "glass-btn option-btn text-left p-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-3 w-full border border-white/80 hover:bg-white/90";
                btn.onclick = () => selectOption(idx);

                const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D
                btn.innerHTML = `
                    <span class="w-6 h-6 rounded-lg bg-white/80 border border-slate-200 text-slate-600 font-bold flex items-center justify-center text-xs shrink-0">${optionLabel}</span>
                    <span>${opt}</span>
                `;
                optionsGrid.appendChild(btn);
            });

            // If already answered previously (via Back button)
            if (existingRecord) {
                restoreAnswerState(existingRecord);
            } else {
                startTimer();
            }
        }

        function restoreAnswerState(record) {
            const currentQ = questionsData[currentQuestionIndex];
            const optionBtns = document.getElementById('optionsGrid').children;

            for (let btn of optionBtns) {
                btn.disabled = true;
                btn.classList.add('cursor-default');
            }

            if (record.selectedIndex >= 0) {
                if (record.isCorrect) {
                    optionBtns[record.selectedIndex].classList.add('correct');
                } else {
                    optionBtns[record.selectedIndex].classList.add('incorrect');
                    optionBtns[currentQ.correct].classList.add('correct');
                }
            } else {
                optionBtns[currentQ.correct].classList.add('correct');
            }

            document.getElementById('explanationText').innerText = record.explanation;
            document.getElementById('explanationBox').classList.remove('hidden');
            document.getElementById('nextBtn').disabled = false;
        }

        function startTimer() {
            updateTimerDisplay();
            timerInterval = setInterval(() => {
                timeLeft--;
                updateTimerDisplay();

                if (timeLeft <= 4 && timeLeft > 0) {
                    playSound('tick');
                }

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    handleTimeout();
                }
            }, 1000);
        }

        function updateTimerDisplay() {
            document.getElementById('timerSeconds').innerText = timeLeft;
            const timerRing = document.getElementById('timerRing');
            const circumference = 283;
            const offset = circumference - (timeLeft / 15) * circumference;
            timerRing.style.strokeDashoffset = offset;

            if (timeLeft <= 4) {
                timerRing.setAttribute('class', 'timer-circle text-rose-500 animate-pulse');
            } else if (timeLeft <= 8) {
                timerRing.setAttribute('class', 'timer-circle text-amber-500');
            } else {
                timerRing.setAttribute('class', 'timer-circle text-indigo-500');
            }
        }

        function selectOption(selectedIndex) {
            clearInterval(timerInterval);
            const currentQ = questionsData[currentQuestionIndex];
            const optionBtns = document.getElementById('optionsGrid').children;

            for (let btn of optionBtns) {
                btn.disabled = true;
                btn.classList.add('cursor-default');
            }

            const isCorrect = (selectedIndex === currentQ.correct);

            if (isCorrect) {
                optionBtns[selectedIndex].classList.add('correct');
                score += currentQ.points;
                correctAnswersCount++;
                playSound('correct');
            } else {
                optionBtns[selectedIndex].classList.add('incorrect');
                optionBtns[currentQ.correct].classList.add('correct');
                lives--;
                renderHearts();
                playSound('wrong');
            }

            // Save user answer history
            userAnswers[currentQuestionIndex] = {
                question: currentQ.question,
                selectedIndex: selectedIndex,
                selected: selectedIndex >= 0 ? currentQ.options[selectedIndex] : "Waktu Habis",
                correct: currentQ.options[currentQ.correct],
                isCorrect: isCorrect,
                explanation: currentQ.explanation
            };

            document.getElementById('explanationText').innerText = currentQ.explanation;
            document.getElementById('explanationBox').classList.remove('hidden');
            document.getElementById('liveScore').innerText = score;

            // Check Game Over Condition
            if (lives <= 0) {
                setTimeout(() => {
                    showResults(true); // Game Over due to zero lives
                }, 1200);
            } else {
                document.getElementById('nextBtn').disabled = false;
            }
        }

        function handleTimeout() {
            const currentQ = questionsData[currentQuestionIndex];
            const optionBtns = document.getElementById('optionsGrid').children;

            for (let btn of optionBtns) {
                btn.disabled = true;
            }

            optionBtns[currentQ.correct].classList.add('correct');
            lives--;
            renderHearts();
            playSound('wrong');

            userAnswers[currentQuestionIndex] = {
                question: currentQ.question,
                selectedIndex: -1,
                selected: "Waktu Habis (15s)",
                correct: currentQ.options[currentQ.correct],
                isCorrect: false,
                explanation: currentQ.explanation
            };

            document.getElementById('explanationText').innerText = "Waktu habis (15s)! " + currentQ.explanation;
            document.getElementById('explanationBox').classList.remove('hidden');

            if (lives <= 0) {
                setTimeout(() => {
                    showResults(true);
                }, 1200);
            } else {
                document.getElementById('nextBtn').disabled = false;
            }
        }

        function prevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                loadQuestion();
            }
        }

        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questionsData.length) {
                loadQuestion();
            } else {
                showResults(false); // Finished all 15 questions
            }
        }

        function renderDiagram(type) {
            const box = document.getElementById('diagramBox');
            let svgContent = "";

            switch (type) {
                case "square":
                    svgContent = `<svg width="110" height="110" viewBox="0 0 100 100">
                        <rect x="20" y="20" width="60" height="60" fill="#e0e7ff" stroke="#6366f1" stroke-width="3.5" rx="4" />
                        <rect x="20" y="20" width="8" height="8" fill="none" stroke="#4f46e5" stroke-width="2" />
                        <rect x="72" y="20" width="8" height="8" fill="none" stroke="#4f46e5" stroke-width="2" />
                        <rect x="20" y="72" width="8" height="8" fill="none" stroke="#4f46e5" stroke-width="2" />
                        <rect x="72" y="72" width="8" height="8" fill="none" stroke="#4f46e5" stroke-width="2" />
                    </svg>`;
                    break;
                case "cube":
                case "cubeDim":
                    svgContent = `<svg width="120" height="110" viewBox="0 0 120 120">
                        <path d="M30 40 L70 40 L70 80 L30 80 Z" fill="#c7d2fe" stroke="#4f46e5" stroke-width="3"/>
                        <path d="M30 40 L50 20 L90 20 L70 40 Z" fill="#e0e7ff" stroke="#4f46e5" stroke-width="3"/>
                        <path d="M70 40 L90 20 L90 60 L70 80 Z" fill="#a5b4fc" stroke="#4f46e5" stroke-width="3"/>
                        ${type === "cubeDim" ? '<text x="45" y="98" fill="#312e81" font-size="11" font-weight="bold">r = 6 cm</text>' : ''}
                    </svg>`;
                    break;
                case "rectangle":
                    svgContent = `<svg width="130" height="90" viewBox="0 0 130 90">
                        <rect x="15" y="20" width="100" height="50" fill="#ccfbf1" stroke="#14b8a6" stroke-width="3.5" rx="4" />
                        <text x="58" y="83" fill="#0f766e" font-size="11" font-weight="bold">p</text>
                        <text x="120" y="50" fill="#0f766e" font-size="11" font-weight="bold">l</text>
                    </svg>`;
                    break;
                case "cone":
                    svgContent = `<svg width="110" height="110" viewBox="0 0 120 120">
                        <ellipse cx="60" cy="90" rx="40" ry="14" fill="#fbcfe8" stroke="#ec4899" stroke-width="3"/>
                        <path d="M20 90 L60 15 L100 90 Z" fill="#fde8e8" stroke="#ec4899" stroke-width="3" opacity="0.75"/>
                        <circle cx="60" cy="15" r="4" fill="#be185d"/>
                    </svg>`;
                    break;
                case "triangle":
                case "triangleAngles":
                    svgContent = `<svg width="120" height="100" viewBox="0 0 120 100">
                        <polygon points="20,80 100,80 20,20" fill="#fef3c7" stroke="#f59e0b" stroke-width="3"/>
                        <line x1="20" y1="20" x2="20" y2="80" stroke="#d97706" stroke-width="2" stroke-dasharray="3,3"/>
                        ${type === "triangle" ? '<text x="50" y="95" fill="#92400e" font-size="10" font-weight="bold">a = 8 cm</text><text x="2" y="55" fill="#92400e" font-size="10" font-weight="bold">t=5</text>' : '<text x="24" y="72" fill="#b45309" font-size="10" font-weight="bold">90°</text><text x="75" y="75" fill="#b45309" font-size="10" font-weight="bold">35°</text><text x="28" y="38" fill="#b45309" font-size="11" font-weight="bold">?</text>'}
                    </svg>`;
                    break;
                case "cuboid":
                    svgContent = `<svg width="130" height="100" viewBox="0 0 130 100">
                        <path d="M20 45 L85 45 L85 85 L20 85 Z" fill="#fed7aa" stroke="#f97316" stroke-width="3"/>
                        <path d="M20 45 L42 22 L107 22 L85 45 Z" fill="#ffedd5" stroke="#f97316" stroke-width="3"/>
                        <path d="M85 45 L107 22 L107 62 L85 85 Z" fill="#fdba74" stroke="#f97316" stroke-width="3"/>
                        <text x="45" y="97" fill="#9a3412" font-size="10" font-weight="bold">p=10</text>
                        <text x="110" y="45" fill="#9a3412" font-size="10" font-weight="bold">l=5</text>
                        <text x="5" y="68" fill="#9a3412" font-size="10" font-weight="bold">t=4</text>
                    </svg>`;
                    break;
                case "prism":
                    svgContent = `<svg width="110" height="110" viewBox="0 0 120 120">
                        <polygon points="30,90 90,90 60,60" fill="#dcfce7" stroke="#22c55e" stroke-width="3"/>
                        <polygon points="30,40 90,40 60,10" fill="#bbf7d0" stroke="#22c55e" stroke-width="3"/>
                        <line x1="30" y1="90" x2="30" y2="40" stroke="#22c55e" stroke-width="3"/>
                        <line x1="90" y1="90" x2="90" y2="40" stroke="#22c55e" stroke-width="3"/>
                        <line x1="60" y1="60" x2="60" y2="10" stroke="#22c55e" stroke-width="3"/>
                    </svg>`;
                    break;
                case "circle":
                    svgContent = `<svg width="110" height="110" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="42" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
                        <line x1="60" y1="60" x2="102" y2="60" stroke="#0369a1" stroke-width="3"/>
                        <circle cx="60" cy="60" r="4" fill="#0369a1"/>
                        <text x="70" y="52" fill="#075985" font-size="11" font-weight="bold">r = 7 cm</text>
                    </svg>`;
                    break;
                case "pyramid":
                case "pyramidVol":
                    svgContent = `<svg width="110" height="110" viewBox="0 0 120 120">
                        <polygon points="20,85 80,95 100,75 40,65" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
                        <path d="M20 85 L60 20 L80 95 Z" fill="#c4b5fd" stroke="#7c3aed" stroke-width="3"/>
                        <path d="M80 95 L60 20 L100 75 Z" fill="#a78bfa" stroke="#7c3aed" stroke-width="3"/>
                        <circle cx="60" cy="20" r="4" fill="#5b21b6"/>
                    </svg>`;
                    break;
                case "cylinder":
                    svgContent = `<svg width="110" height="110" viewBox="0 0 120 120">
                        <ellipse cx="60" cy="25" rx="35" ry="12" fill="#bae6fd" stroke="#0284c7" stroke-width="3"/>
                        <path d="M25 25 L25 90 C25 102 95 102 95 90 L95 25 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="3" opacity="0.8"/>
                        <ellipse cx="60" cy="90" rx="35" ry="12" fill="none" stroke="#0284c7" stroke-width="3"/>
                    </svg>`;
                    break;
                case "composite":
                    svgContent = `<svg width="120" height="110" viewBox="0 0 130 120">
                        <rect x="20" y="60" width="40" height="40" fill="#fbcfe8" stroke="#db2777" stroke-width="2"/>
                        <rect x="60" y="30" width="40" height="70" fill="#fce7f3" stroke="#db2777" stroke-width="2"/>
                        <text x="24" y="85" fill="#9d174d" font-size="10" font-weight="bold">Kubus</text>
                        <text x="64" y="70" fill="#9d174d" font-size="10" font-weight="bold">Balok</text>
                    </svg>`;
                    break;
                case "netCylinder":
                    svgContent = `<svg width="130" height="100" viewBox="0 0 140 110">
                        <rect x="35" y="35" width="70" height="40" fill="#e0e7ff" stroke="#4338ca" stroke-width="2" rx="2"/>
                        <circle cx="70" cy="18" r="14" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>
                        <circle cx="70" cy="92" r="14" fill="#c7d2fe" stroke="#4338ca" stroke-width="2"/>
                    </svg>`;
                    break;
                default:
                    svgContent = `<span class="text-4xl">📐</span>`;
            }

            box.innerHTML = svgContent;
        }

        function showResults(isGameOver = false) {
            clearInterval(timerInterval);
            document.getElementById('gameScreen').classList.add('hidden');
            document.getElementById('resultScreen').classList.remove('hidden');

            const accuracy = Math.round((correctAnswersCount / questionsData.length) * 100);

            document.getElementById('finalScore').innerText = score;
            document.getElementById('finalAccuracy').innerText = `${accuracy}%`;
            document.getElementById('correctStatsText').innerText = `${correctAnswersCount} dari 15 Benar`;

            const titleEl = document.getElementById('geometriTitle');
            const resultTitle = document.getElementById('resultTitle');
            const resultSubtitle = document.getElementById('resultSubtitle');
            const resultBadgeIcon = document.getElementById('resultBadgeIcon');

            if (isGameOver) {
                resultTitle.innerText = "Game Over! 💔";
                resultSubtitle.innerText = "Nyawa kamu habis! Jangan menyerah dan coba lagi yuk.";
                resultBadgeIcon.innerText = "💀";
                titleEl.innerText = "Coba Lagi";
                titleEl.className = "text-xs sm:text-sm font-extrabold text-rose-600 mt-2";
            } else {
                if (accuracy >= 80) {
                    resultTitle.innerText = "Luar Biasa! 🌟";
                    resultSubtitle.innerText = "Selamat! Kamu berhasil menaklukkan seluruh level Geometri!";
                    resultBadgeIcon.innerText = "🏆";
                    titleEl.innerText = "Master Geometri";
                    titleEl.className = "text-xs sm:text-sm font-extrabold text-indigo-600 mt-2";
                    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
                } else if (accuracy >= 50) {
                    resultTitle.innerText = "Kerja Bagus! 👍";
                    resultSubtitle.innerText = "Pemahaman geometrimu sudah cukup baik.";
                    resultBadgeIcon.innerText = "🥇";
                    titleEl.innerText = "Arsitek Muda";
                    titleEl.className = "text-xs sm:text-sm font-extrabold text-amber-600 mt-2";
                } else {
                    resultTitle.innerText = "Tetap Semangat! 💪";
                    resultSubtitle.innerText = "Pelajari lagi rumus dan bentuk bangun ruang ya.";
                    resultBadgeIcon.innerText = "📚";
                    titleEl.innerText = "Penjelajah Ruang";
                    titleEl.className = "text-xs sm:text-sm font-extrabold text-purple-600 mt-2";
                }
            }
        }

        function restartGame() {
            startGame();
        }

        function openReviewModal() {
            const listContainer = document.getElementById('reviewList');
            listContainer.innerHTML = "";

            userAnswers.forEach((ans, idx) => {
                if (!ans) return;
                const item = document.createElement('div');
                item.className = `p-3.5 rounded-2xl border text-xs sm:text-sm ${
                    ans.isCorrect 
                        ? 'bg-emerald-50/80 border-emerald-200' 
                        : 'bg-rose-50/80 border-rose-200'
                }`;

                item.innerHTML = `
                    <div class="flex items-start justify-between gap-2 mb-1">
                        <span class="font-bold text-slate-800">Soal ${idx + 1}: ${ans.question}</span>
                        <span class="px-2 py-0.5 rounded-md font-bold text-[10px] shrink-0 ${
                            ans.isCorrect ? 'bg-emerald-200 text-emerald-800' : 'bg-rose-200 text-rose-800'
                        }">${ans.isCorrect ? 'BENAR' : 'SALAH'}</span>
                    </div>
                    <div class="text-slate-600 mb-0.5">
                        <b>Jawabanmu:</b> <span class="${ans.isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}">${ans.selected}</span>
                    </div>
                    ${!ans.isCorrect ? `<div class="text-slate-600 mb-0.5"><b>Jawaban Benar:</b> <span class="text-emerald-700 font-bold">${ans.correct}</span></div>` : ''}
                    <div class="text-slate-500 text-[11px] mt-1.5 pt-1.5 border-t border-slate-200/60">
                        <i class="fa-solid fa-lightbulb text-amber-500 mr-1"></i> ${ans.explanation}
                    </div>
                `;

                listContainer.appendChild(item);
            });

            document.getElementById('reviewModal').classList.remove('hidden');
        }

        function closeReviewModal() {
            document.getElementById('reviewModal').classList.add('hidden');
        }
