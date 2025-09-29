// Ejercicio 4: Sistema de Gestión de Estudiantes con Programación Orientada a Objetos
// Instrucciones: Implementa las clases y métodos marcados con TODO

// ============================================================================
// CLASES BASE (PARA COMPLETAR POR EL ESTUDIANTE)
// ============================================================================

/**
 * TAREA 1: Implementar la clase Person como clase base
 * 
 * Esta clase debe tener:
 * - Propiedades: id, name, email, age, phone
 * - Constructor que inicialice todas las propiedades
 * - Métodos getter y setter para email con validación
 * - Método toString() que devuelva una representación en string
 * - Método estático para validar email
 */
class Person {

    constructor(name, email, age = 18, phone = '') {
   this.id = Person.generateId();
   this.name = name;
   this.email = email; 
   this.age = age;
   this.phone = phone;
   this.createdAt = new Date();
    }
    
    // 2. Getter y setter para email:
    get email() { return this._email; }
    set email(value) {
        if (!Person.isValidEmail(value)) {
        throw new Error('Email inválido');
    }
        this._email = value;
    }
    
    // 3. Método estático para validar email:
    static isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    }
    
    //4. Método toString():
    toString() {
         return `${this.name} (${this.email})`;
    }
    
    // 5. Generar ID único:
    static generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
    }
}

/**
 * TAREA 2: Implementar la clase Student que hereda de Person
 * 
 * Esta clase debe:
 * - Heredar de Person
 * - Tener propiedades adicionales: enrolledCourses, grades
 * - Sobrescribir toString() para incluir información de estudiante
 * - Métodos para inscribir/desinscribir cursos
 * - Métodos para calcular promedio de calificaciones
 * - Método para obtener estado académico (Honor, Warning, etc.)
 */
class Student extends Person {
    // TODO: Implementar la clase Student
    
    // Pistas para implementar:
    
constructor(name, email, age = 18, phone = ''){
 super(name, email, age, phone);
 this.enrolledCourses=[];
 this.grades=[];
 this.enrollementDate = new Date();
}    
    // 2. Inscribir en curso:

enrollInCourses(courseid){
if (this.enrolledStudents.length>=this.maxCapacity){
    throw new error
}
}
    
    // 3. Calcular promedio:
    
    // 4. Obtener estado académico:
    
    // 5. Sobrescribir toString:
}

/**
 * TAREA 3: Implementar la clase Course
 * 
 * Esta clase debe:
 * - Propiedades: id, name, code, description, instructor, credits, enrolledStudents
 * - Métodos para inscribir/desinscribir estudiantes
 * - Método para obtener capacidad y disponibilidad
 * - Validaciones para códigos de curso únicos
 */
class Course {
    // TODO: Implementar la clase Course
    
    // Pistas para implementar:
    
    // 1. Constructor:
    
    
    // 2. Inscribir estudiante:
    
    
    // 3. Obtener disponibilidad:
    
    
    // 4. toString:
    
    
    // 5. Generar ID:
}

/**
 * TAREA 4: Implementar la clase Grade
 * 
 * Esta clase debe:
 * - Propiedades: id, studentId, courseId, score, date, letterGrade
 * - Método para calcular letra de calificación automáticamente
 * - Validaciones para puntuaciones (0-100)
 */
class Grade {
    // TODO: Implementar la clase Grade
    
    // Pistas para implementar:
    
    // 1. Constructor:
    
    
    // 2. Validar puntuación:
    
    
    // 3. Calcular letra:
    
    
    // 4. Generar ID:
    
}

/**
 * TAREA 5: Implementar la clase SchoolManager (Patrón Singleton)
 * 
 * Esta clase debe:
 * - Implementar patrón Singleton
 * - Gestionar estudiantes, cursos y calificaciones
 * - Métodos CRUD para todas las entidades
 * - Métodos de búsqueda y filtrado
 * - Cálculo de estadísticas
 * - Persistencia en localStorage
 */
class SchoolManager {
    // TODO: Implementar el patrón Singleton y métodos de gestión
    
    // 1. Constructor:

    // 2. Métodos CRUD para estudiantes:
    
    // 3. Métodos de estadísticas:
    
    // 4. Persistencia:
    
}

// ============================================================================
// INSTANCIA GLOBAL Y VARIABLES (YA IMPLEMENTADAS)
// ============================================================================

let schoolManager;
let currentSection = 'dashboard';
let charts = {};

// Elementos del DOM
const elements = {
    // Navegación
    navBtns: document.querySelectorAll('.nav-btn'),
    sections: document.querySelectorAll('.section'),
    
    // Dashboard
    totalStudentsEl: document.getElementById('total-students'),
    totalCoursesEl: document.getElementById('total-courses'),
    averageGradeEl: document.getElementById('average-grade'),
    honorStudentsEl: document.getElementById('honor-students'),
    
    // Estudiantes
    studentsGrid: document.getElementById('students-grid'),
    noStudents: document.getElementById('no-students'),
    studentSearch: document.getElementById('student-search'),
    courseFilter: document.getElementById('course-filter'),
    gradeFilter: document.getElementById('grade-filter'),
    
    // Cursos
    coursesGrid: document.getElementById('courses-grid'),
    
    // Calificaciones
    gradesTable: document.getElementById('grades-table'),
    gradesTBody: document.getElementById('grades-tbody'),
    
    // Modales
    studentModal: document.getElementById('student-modal'),
    courseModal: document.getElementById('course-modal'),
    gradeModal: document.getElementById('grade-modal'),
    
    // Formularios
    studentForm: document.getElementById('student-form'),
    courseForm: document.getElementById('course-form'),
    gradeForm: document.getElementById('grade-form')
};

// ============================================================================
// FUNCIONES DE INTERFAZ (YA IMPLEMENTADAS - ESTUDIAR COMO REFERENCIA)
// ============================================================================

/**
 * Inicializar la aplicación
 */
function initializeApp() {
    schoolManager = SchoolManager.getInstance();
    schoolManager.loadFromStorage();
    
    setupEventListeners();
    updateDashboard();
    renderStudents();
    renderCourses();
    renderGrades();
    
    // Datos de ejemplo para desarrollo
    if (schoolManager.students.length === 0) {
        loadSampleData();
    }
}

/**
 * Configurar event listeners
 */
function setupEventListeners() {
    // Navegación
    elements.navBtns.forEach(btn => {
        btn.addEventListener('click', () => switchSection(btn.dataset.section));
    });
    
    // Búsqueda y filtros
    elements.studentSearch?.addEventListener('input', filterStudents);
    elements.courseFilter?.addEventListener('change', filterStudents);
    elements.gradeFilter?.addEventListener('change', filterStudents);
    
    // Formularios
    elements.studentForm?.addEventListener('submit', handleStudentSubmit);
    elements.courseForm?.addEventListener('submit', handleCourseSubmit);
    elements.gradeForm?.addEventListener('submit', handleGradeSubmit);
}

/**
 * Cambiar sección activa
 */
function switchSection(sectionName) {
    currentSection = sectionName;
    
    // Actualizar botones de navegación
    elements.navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionName);
    });
    
    // Mostrar sección correspondiente
    elements.sections.forEach(section => {
        section.classList.toggle('active', section.id === sectionName);
    });
    
    // Actualizar datos según la sección
    switch (sectionName) {
        case 'dashboard':
            updateDashboard();
            updateCharts();
            break;
        case 'students':
            renderStudents();
            break;
        case 'courses':
            renderCourses();
            break;
        case 'grades':
            renderGrades();
            break;
    }
}

/**
 * Actualizar dashboard con estadísticas
 */
function updateDashboard() {
    const stats = schoolManager?.getStatistics() || {
        totalStudents: 0,
        totalCourses: 0,
        averageGrade: 0,
        honorStudents: 0
    };
    
    if (elements.totalStudentsEl) elements.totalStudentsEl.textContent = stats.totalStudents;
    if (elements.totalCoursesEl) elements.totalCoursesEl.textContent = stats.totalCourses;
    if (elements.averageGradeEl) elements.averageGradeEl.textContent = stats.averageGrade.toFixed(1);
    if (elements.honorStudentsEl) elements.honorStudentsEl.textContent = stats.honorStudents;
}

/**
 * Actualizar gráficos del dashboard
 */
function updateCharts() {
    updateGradesChart();
    updateCoursesChart();
}

/**
 * Actualizar gráfico de distribución de calificaciones
 */
function updateGradesChart() {
    const canvas = document.getElementById('gradesChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (charts.gradesChart) {
        charts.gradesChart.destroy();
    }
    
    const gradeDistribution = schoolManager?.getGradeDistribution() || {
        A: 0, B: 0, C: 0, D: 0, F: 0
    };
    
    charts.gradesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['A', 'B', 'C', 'D', 'F'],
            datasets: [{
                data: Object.values(gradeDistribution),
                backgroundColor: [
                    '#22c55e', '#3b82f6', '#f59e0b', '#f97316', '#ef4444'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

/**
 * Actualizar gráfico de estudiantes por curso
 */
function updateCoursesChart() {
    const canvas = document.getElementById('coursesChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (charts.coursesChart) {
        charts.coursesChart.destroy();
    }
    
    const courseData = schoolManager?.getCourseEnrollmentData() || { labels: [], data: [] };
    
    charts.coursesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: courseData.labels,
            datasets: [{
                label: 'Estudiantes Inscritos',
                data: courseData.data,
                backgroundColor: '#6366f1',
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

/**
 * Renderizar estudiantes
 */
function renderStudents() {
    if (!elements.studentsGrid) return;
    
    const students = schoolManager?.getAllStudents() || [];
    
    if (students.length === 0) {
        elements.studentsGrid.style.display = 'none';
        if (elements.noStudents) elements.noStudents.classList.remove('hidden');
        return;
    }
    
    elements.studentsGrid.style.display = 'grid';
    if (elements.noStudents) elements.noStudents.classList.add('hidden');
    
    elements.studentsGrid.innerHTML = students.map(student => `
        <div class="student-card">
            <div class="student-header">
                <h3 class="student-name">${student.name}</h3>
                <p class="student-email">${student.email}</p>
            </div>
            <div class="student-body">
                <div class="student-info">
                    <div class="info-item">
                        <i class="fas fa-birthday-cake"></i>
                        <span>${student.age} años</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-phone"></i>
                        <span>${student.phone || 'No especificado'}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-chart-line"></i>
                        <span>GPA: ${student.calculateGPA().toFixed(2)}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-award"></i>
                        <span>${student.getAcademicStatus()}</span>
                    </div>
                </div>
                <div class="student-courses">
                    <strong>Cursos Inscritos:</strong>
                    <div class="courses-list">
                        ${student.enrolledCourses.map(courseId => {
                            const course = schoolManager.getCourse(courseId);
                            return course ? `<span class="course-badge">${course.code}</span>` : '';
                        }).join('')}
                    </div>
                </div>
            </div>
            <div class="student-actions">
                <button class="action-btn" onclick="editStudent('${student.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="action-btn primary" onclick="showGradeModal('${student.id}')">
                    <i class="fas fa-star"></i> Calificar
                </button>
                <button class="action-btn danger-btn" onclick="deleteStudent('${student.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

/**
 * Renderizar cursos
 */
function renderCourses() {
    if (!elements.coursesGrid) return;
    
    const courses = schoolManager?.getAllCourses() || [];
    
    elements.coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card">
            <div class="course-header">
                <h3 class="course-name">${course.name}</h3>
                <p class="course-code">${course.code}</p>
            </div>
            <div class="course-body">
                <div class="course-info">
                    <div class="info-item">
                        <i class="fas fa-user-tie"></i>
                        <span>${course.instructor || 'Sin asignar'}</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-graduation-cap"></i>
                        <span>${course.credits} créditos</span>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-users"></i>
                        <span>${course.enrolledStudents.length}/${course.maxCapacity} estudiantes</span>
                    </div>
                </div>
                <p class="course-description">${course.description || 'Sin descripción'}</p>
            </div>
            <div class="course-actions">
                <button class="action-btn" onclick="editCourse('${course.id}')">
                    <i class="fas fa-edit"></i> Editar
                </button>
                <button class="action-btn danger-btn" onclick="deleteCourse('${course.id}')">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

/**
 * Renderizar tabla de calificaciones
 */
function renderGrades() {
    if (!elements.gradesTBody) return;
    
    const grades = schoolManager?.getAllGrades() || [];
    
    elements.gradesTBody.innerHTML = grades.map(grade => {
        const student = schoolManager.getStudent(grade.studentId);
        const course = schoolManager.getCourse(grade.courseId);
        
        return `
            <tr>
                <td>${student?.name || 'Estudiante no encontrado'}</td>
                <td>${course?.name || 'Curso no encontrado'}</td>
                <td>
                    <span class="grade-badge grade-${grade.letterGrade}">
                        ${grade.score} (${grade.letterGrade})
                    </span>
                </td>
                <td>${new Date(grade.date).toLocaleDateString()}</td>
                <td>
                    <button class="action-btn" onclick="editGrade('${grade.id}')">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="danger-btn" onclick="deleteGrade('${grade.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// ============================================================================
// FUNCIONES DE MODAL Y FORMULARIOS (SIMPLIFICADAS)
// ============================================================================

function showStudentModal() {
    if (elements.studentModal) elements.studentModal.classList.add('active');
}

function closeStudentModal() {
    if (elements.studentModal) elements.studentModal.classList.remove('active');
}

function showCourseModal() {
    if (elements.courseModal) elements.courseModal.classList.add('active');
}

function closeCourseModal() {
    if (elements.courseModal) elements.courseModal.classList.remove('active');
}

function showGradeModal(studentId = '') {
    if (elements.gradeModal) {
        elements.gradeModal.classList.add('active');
        if (studentId) {
            const studentSelect = document.getElementById('grade-student');
            if (studentSelect) studentSelect.value = studentId;
        }
    }
}

function closeGradeModal() {
    if (elements.gradeModal) elements.gradeModal.classList.remove('active');
}

function toggleInstructions() {
    const panel = document.getElementById('instructions-panel');
    if (panel) panel.classList.toggle('hidden');
}

// ============================================================================
// FUNCIONES PARA ESTUDIANTES IMPLEMENTAR (PLACEHOLDER)
// ============================================================================

function handleStudentSubmit(e) {
    e.preventDefault();
    // TODO: Los estudiantes deben implementar esta función
    console.log('Función handleStudentSubmit pendiente de implementar');
}

function handleCourseSubmit(e) {
    e.preventDefault();
    // TODO: Los estudiantes deben implementar esta función
    console.log('Función handleCourseSubmit pendiente de implementar');
}

function handleGradeSubmit(e) {
    e.preventDefault();
    // TODO: Los estudiantes deben implementar esta función
    console.log('Función handleGradeSubmit pendiente de implementar');
}

function filterStudents() {
    // TODO: Los estudiantes deben implementar esta función
    console.log('Función filterStudents pendiente de implementar');
}

function editStudent(id) {
    // TODO: Los estudiantes deben implementar esta función
    console.log('Editar estudiante:', id);
}

function deleteStudent(id) {
    // TODO: Los estudiantes deben implementar esta función
    console.log('Eliminar estudiante:', id);
}

function editCourse(id) {
    // TODO: Los estudiantes deben implementar esta función
    console.log('Editar curso:', id);
}

function deleteCourse(id) {
    // TODO: Los estudiantes deben implementar esta función
    console.log('Eliminar curso:', id);
}

function editGrade(id) {
    // TODO: Los estudiantes deben implementar esta función
    console.log('Editar calificación:', id);
}

function deleteGrade(id) {
    // TODO: Los estudiantes deben implementar esta función
    console.log('Eliminar calificación:', id);
}

/**
 * Cargar datos de ejemplo (solo para desarrollo)
 */
function loadSampleData() {
    if (!schoolManager) return;
    
    // Crear cursos de ejemplo
    const sampleCourses = [
        { name: 'Matemáticas Avanzadas', code: 'MAT101', instructor: 'Dr. García', credits: 4 },
        { name: 'Programación I', code: 'PRG101', instructor: 'Prof. López', credits: 3 },
        { name: 'Física General', code: 'FIS101', instructor: 'Dr. Martínez', credits: 4 }
    ];
    
    sampleCourses.forEach(courseData => {
        // Los estudiantes implementarán schoolManager.addCourse()
        console.log('Creando curso de ejemplo:', courseData.name);
    });
    
    // Crear estudiantes de ejemplo
    const sampleStudents = [
        { name: 'Ana García', email: 'ana@email.com', age: 20, phone: '123-456-7890' },
        { name: 'Carlos López', email: 'carlos@email.com', age: 22, phone: '098-765-4321' },
        { name: 'María Rodríguez', email: 'maria@email.com', age: 19, phone: '555-123-4567' }
    ];
    
    sampleStudents.forEach(studentData => {
        // Los estudiantes implementarán schoolManager.addStudent()
        console.log('Creando estudiante de ejemplo:', studentData.name);
    });
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', initializeApp);