import React, { useState } from 'react';
import { 
  PieChart as PieIcon, 
  BookOpen, 
  Calendar as CalendarIcon, 
  CheckCircle2, 
  Clock, 
  GraduationCap, 
  LayoutDashboard, 
  Plus, 
  Briefcase, 
  Target, 
  TrendingUp, 
  Zap, 
  Settings, 
  ChevronRight, 
  Award, 
  AlertCircle, 
  Brain, 
  User,
  FileText,
  X,
  Sparkles,
  Link2,
  BarChart2,
  Layers,
  CheckSquare,
  ExternalLink,
  Mail,
  Video,
  ChevronDown,
  Filter,
  BarChart3,
  Search,
  RotateCcw
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // User Profile State
  const [userProfile, setUserProfile] = useState({
    name: 'Estudante de Direito',
    goalHoursPerWeek: 35,
    concursoTarget: 'Analista Judiciário (TRF)',
    faculdadeSemester: '10º Período - UniDon'
  });

  // Central Metrics & Sector Distribution State (Hours spent per sector)
  const [studySectorData, setStudySectorData] = useState([
    { name: '2ª Fase OAB (Trabalho)', hours: 18.5, color: '#c084fc' }, // Lilás vivo
    { name: 'Concurso Público', hours: 12.0, color: '#a855f7' },        // Lilás médio
    { name: 'Faculdade', hours: 8.5, color: '#9333ea' },               // Lilás escuro
    { name: 'TCC', hours: 6.0, color: '#3f3f46' }                      // Cinza
  ]);

  // General Questions & Class Stats
  const [stats, setStats] = useState({
    totalQuestions: 540,
    correctQuestions: 432,
    accuracyRate: 80.0,
    completedClasses: 38,
    totalClassesInSchedule: 142
  });

  // 1. OAB 2nd Phase Schedule State (From Gran Cursos PDF)
  const [oabSchedule, setOabSchedule] = useState([
    // Novembro 2026
    { id: 1, month: 'Novembro/2026', date: '16- Segunda-feira', module: 'Módulo 1. Plano de Aprovação', title: '1 - Linha do Tempo na Fase de Conhecimento', type: 'Videoaula', done: true, hours: 0.5 },
    { id: 2, month: 'Novembro/2026', date: '16- Segunda-feira', module: 'Módulo 1. Plano de Aprovação', title: '2 - Linha do Tempo na Fase de Conhecimento II', type: 'Videoaula', done: true, hours: 0.5 },
    { id: 3, month: 'Novembro/2026', date: '16- Segunda-feira', module: 'MÓDULO 2. Mais Conteúdo', title: '1 - Verbas Rescisórias', type: 'Videoaula', done: true, hours: 0.5 },
    { id: 4, month: 'Novembro/2026', date: '16- Segunda-feira', module: 'MÓDULO 2. Mais Conteúdo', title: '2 - Verbas Rescisórias II', type: 'Videoaula', done: true, hours: 0.5 },
    { id: 5, month: 'Novembro/2026', date: '17 - Terça-feira', module: 'MÓDULO 3. Aulas Extras Youtube', title: '1 - Planejamento de Estudo de Direito do Trabalho com Aryanna Linhares', type: 'Videoaula', done: true, hours: 1.0 },
    { id: 6, month: 'Novembro/2026', date: '17 - Terça-feira', module: 'MÓDULO 3. Aulas Extras Youtube', title: '2 - Do Zero à Aprovação Em Direito do Trabalho', type: 'Videoaula', done: true, hours: 1.0 },
    { id: 7, month: 'Novembro/2026', date: '18- Quarta-feira', module: 'MÓDULO 4. Português Jurídico', title: '1 - Regras do Edital', type: 'Videoaula', done: true, hours: 0.5 },
    { id: 8, month: 'Novembro/2026', date: '18- Quarta-feira', module: 'Módulo 1. Plano de Aprovação', title: '1 - Reclamação Trabalhista - Passo a Passo', type: 'Videoaula', done: true, hours: 1.0 },
    { id: 9, month: 'Novembro/2026', date: '30- Segunda-feira', module: 'Módulo 1. Plano de Aprovação', title: '1 - Contestação passo a passo - 1ª parte', type: 'Videoaula', done: false, hours: 0.5 },
    { id: 10, month: 'Novembro/2026', date: '30- Segunda-feira', module: 'Módulo 1. Plano de Aprovação', title: '2 - Contestação passo a passo - 2ª parte', type: 'Videoaula', done: false, hours: 0.5 },
    
    // Dezembro 2026
    { id: 11, month: 'Dezembro/2026', date: '02- Quarta-feira', module: 'Módulo 1. Plano de Aprovação', title: '3 - Contestação passo a passo - 3ª parte', type: 'Videoaula', done: false, hours: 0.5 },
    { id: 12, month: 'Dezembro/2026', date: '04- Sexta-feira', module: 'MÓDULO 2. Mais Conteúdo', title: '15 - Estabilidade Provisória', type: 'Videoaula', done: false, hours: 0.5 },
    { id: 13, month: 'Dezembro/2026', date: '10- Quinta-feira', module: 'Módulo 1. Plano de Aprovação', title: '1 - Recurso Adesivo: Identificação e Estrutura', type: 'Videoaula', done: false, hours: 1.0 },
    { id: 14, month: 'Dezembro/2026', date: '17- Quinta-feira', module: 'Módulo 1. Plano de Aprovação', title: '1 - Exercício de Impugnação à Sentença de Liquidação', type: 'Videoaula', done: false, hours: 1.0 },

    // Janeiro 2027
    { id: 15, month: 'Janeiro/2027', date: '05 - Terça-feira', module: 'Módulo 1. Plano de Aprovação', title: '1 - Ações Possessórias - Passo a Passo', type: 'Videoaula', done: false, hours: 1.0 },
    { id: 16, month: 'Janeiro/2027', date: '05 - Terça-feira', module: 'Módulo 1. Plano de Aprovação', title: '3 - Dissídio Coletivo - Teoria', type: 'Videoaula', done: false, hours: 1.0 },
    { id: 17, month: 'Janeiro/2027', date: '11- Segunda-feira', module: 'MÓDULO 2. Mais Conteúdo', title: '29 - Recurso Ordinário', type: 'Videoaula', done: false, hours: 1.0 },
    { id: 18, month: 'Janeiro/2027', date: '15- Sexta-feira', module: 'MÓDULO 2. Mais Conteúdo', title: '40 - Mandado de Segurança e Tutelas de Urgência', type: 'Videoaula', done: false, hours: 1.0 }
  ]);

  // 2. Faculty Data
  const [faculdadeData, setFaculdadeData] = useState([
    { id: 1, name: 'Direito Processual Civil III', professor: 'Dr. Roberto', grade: '8.5', pendingAssignment: 'Peça Prática P2', date: '25/Out' },
    { id: 2, name: 'Direito Tributário', professor: 'Dra. Helena', grade: '9.0', pendingAssignment: 'Seminário de Execução', date: '28/Out' },
    { id: 3, name: 'Direito Internacional', professor: 'Dr. Marcos', grade: '7.8', pendingAssignment: 'Fichamento de Casos', date: '03/Nov' }
  ]);

  // 3. TCC Data
  const [tccData, setTccData] = useState({
    title: 'A Eficiência do Processo Eletrônico no Âmbito dos Tribunais Regionais do Trabalho',
    advisor: 'Profª. Dra. Vanessa Santos',
    deadline: '20/Nov/2026',
    chapters: [
      { id: 1, title: 'Capítulo 1: Introdução e Contexto Histórico', status: 'Concluído', progress: 100 },
      { id: 2, title: 'Capítulo 2: Revisão Bibliográfica e Doutrina Trabalhista', status: 'Em Escrita', progress: 75 },
      { id: 3, title: 'Capítulo 3: Análise de Casos nos TRTs', status: 'Pendente', progress: 20 },
      { id: 4, title: 'Capítulo 4: Considerações Finais', status: 'Pendente', progress: 0 }
    ]
  });

  // 4. Concurso Público Data
  const [concursoData, setConcursoData] = useState({
    targetRole: 'Analista Judiciário - Área Judiciária (TRF)',
    editalStatus: '68% Coberto',
    subjects: [
      { id: 1, name: 'Direito Constitucional', reviewed: true, questionsDone: 210, accuracy: 84 },
      { id: 2, name: 'Direito Administrativo', reviewed: true, questionsDone: 180, accuracy: 76 },
      { id: 3, name: 'Direito Processual Penal', reviewed: false, questionsDone: 110, accuracy: 70 },
      { id: 4, name: 'Língua Portuguesa', reviewed: true, questionsDone: 250, accuracy: 88 }
    ]
  });

  // Modals state
  const [isStudyModalOpen, setIsStudyModalOpen] = useState(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false);

  // Toggle OAB class check and recalculate stats/hours
  const toggleOabClass = (id) => {
    setOabSchedule(prev => prev.map(item => {
      if (item.id === id) {
        const nextDone = !item.done;
        
        // Update total classes count
        setStats(s => ({
          ...s,
          completedClasses: nextDone ? s.completedClasses + 1 : s.completedClasses - 1
        }));

        // Update OAB Sector hours in main Donut chart
        setStudySectorData(sectors => sectors.map(sec => {
          if (sec.name === '2ª Fase OAB (Trabalho)') {
            const added = nextDone ? item.hours : -item.hours;
            return { ...sec, hours: Math.max(0, parseFloat((sec.hours + added).toFixed(1))) };
          }
          return sec;
        }));

        return { ...item, done: nextDone };
      }
      return item;
    }));
  };

  // Add Hours Manually
  const handleRegisterStudy = (sectorName, hours) => {
    setStudySectorData(prev => prev.map(item => {
      if (item.name === sectorName) {
        return { ...item, hours: parseFloat((item.hours + hours).toFixed(1)) };
      }
      return item;
    }));
    setIsStudyModalOpen(false);
  };

  // Add Questions Manually
  const handleRegisterQuestions = (totalQ, correctQ) => {
    setStats(prev => {
      const newTotal = prev.totalQuestions + totalQ;
      const newCorrect = prev.correctQuestions + correctQ;
      const newAcc = parseFloat(((newCorrect / newTotal) * 100).toFixed(1));
      return {
        ...prev,
        totalQuestions: newTotal,
        correctQuestions: newCorrect,
        accuracyRate: newAcc
      };
    });
    setIsQuestionModalOpen(false);
  };

  const totalWeeklyHours = studySectorData.reduce((acc, curr) => acc + curr.hours, 0).toFixed(1);

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col font-sans selection:bg-purple-500 selection:text-black">
      
      {/* Top Main Navigation Bar */}
      <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-purple-500/40 flex items-center justify-center shadow-lg shadow-purple-950/50">
              <Brain className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-lg text-white leading-none tracking-tight">Central de Estudos</h1>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                  Operacional
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">Gestão Integrada de Desempenho & Metas</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsQuestionModalOpen(true)}
              className="flex items-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-semibold px-3 py-2 rounded-xl transition-all"
            >
              <Target className="w-3.5 h-3.5 text-purple-400" />
              <span>Lançar Questões</span>
            </button>

            <button 
              onClick={() => setIsStudyModalOpen(true)}
              className="flex items-center gap-1.5 bg-purple-500 hover:bg-purple-400 text-black text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-md shadow-purple-500/20 active:scale-95"
            >
              <Plus className="w-4 h-4 text-black stroke-[2.5]" />
              <span>Registrar Estudo</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container with Sidebar + Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 flex flex-col lg:flex-row gap-6">
        
        {/* Navigation Sidebar */}
        <aside className="w-full lg:w-64 flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 shrink-0 scrollbar-none">
          
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
              activeTab === 'dashboard' 
                ? 'bg-zinc-900 text-purple-300 border border-purple-500/40 font-semibold shadow-sm' 
                : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200'
            }`}
          >
            <PieIcon className={`w-4 h-4 ${activeTab === 'dashboard' ? 'text-purple-400' : ''}`} />
            <span>Início / Visão Geral</span>
          </button>

          <button 
            onClick={() => setActiveTab('oab')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
              activeTab === 'oab' 
                ? 'bg-zinc-900 text-purple-300 border border-purple-500/40 font-semibold shadow-sm' 
                : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200'
            }`}
          >
            <GraduationCap className={`w-4 h-4 ${activeTab === 'oab' ? 'text-purple-400' : ''}`} />
            <span>2ª Fase OAB (Trabalho)</span>
          </button>

          <button 
            onClick={() => setActiveTab('faculdade')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
              activeTab === 'faculdade' 
                ? 'bg-zinc-900 text-purple-300 border border-purple-500/40 font-semibold shadow-sm' 
                : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200'
            }`}
          >
            <BookOpen className={`w-4 h-4 ${activeTab === 'faculdade' ? 'text-purple-400' : ''}`} />
            <span>Faculdade (UniDon & JACAD)</span>
          </button>

          <button 
            onClick={() => setActiveTab('concurso')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
              activeTab === 'concurso' 
                ? 'bg-zinc-900 text-purple-300 border border-purple-500/40 font-semibold shadow-sm' 
                : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200'
            }`}
          >
            <Award className={`w-4 h-4 ${activeTab === 'concurso' ? 'text-purple-400' : ''}`} />
            <span>Concurso Público</span>
          </button>

          <button 
            onClick={() => setActiveTab('tcc')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
              activeTab === 'tcc' 
                ? 'bg-zinc-900 text-purple-300 border border-purple-500/40 font-semibold shadow-sm' 
                : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200'
            }`}
          >
            <Briefcase className={`w-4 h-4 ${activeTab === 'tcc' ? 'text-purple-400' : ''}`} />
            <span>TCC</span>
          </button>

          <div className="hidden lg:block my-2 border-t border-zinc-900"></div>

          <button 
            onClick={() => setActiveTab('agenda')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
              activeTab === 'agenda' 
                ? 'bg-zinc-900 text-purple-300 border border-purple-500/40 font-semibold shadow-sm' 
                : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200'
            }`}
          >
            <CalendarIcon className={`w-4 h-4 ${activeTab === 'agenda' ? 'text-purple-400' : ''}`} />
            <span>Google Agenda & E-mail</span>
          </button>

          <button 
            onClick={() => setActiveTab('perfil')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
              activeTab === 'perfil' 
                ? 'bg-zinc-900 text-purple-300 border border-purple-500/40 font-semibold shadow-sm' 
                : 'text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-200'
            }`}
          >
            <User className={`w-4 h-4 ${activeTab === 'perfil' ? 'text-purple-400' : ''}`} />
            <span>Perfil & Configurações</span>
          </button>

        </aside>

        {/* Dynamic Content View Area */}
        <main className="flex-1 min-w-0">
          {activeTab === 'dashboard' && (
            <DashboardView 
              studySectorData={studySectorData} 
              totalWeeklyHours={totalWeeklyHours}
              stats={stats}
              userProfile={userProfile}
              setActiveTab={setActiveTab}
            />
          )}

          {activeTab === 'oab' && (
            <Oab2aFaseView 
              oabSchedule={oabSchedule} 
              toggleOabClass={toggleOabClass}
              stats={stats}
            />
          )}

          {activeTab === 'faculdade' && (
            <FaculdadeView 
              faculdadeData={faculdadeData} 
              setFaculdadeData={setFaculdadeData} 
            />
          )}

          {activeTab === 'concurso' && (
            <ConcursoView 
              concursoData={concursoData} 
              setConcursoData={setConcursoData} 
            />
          )}

          {activeTab === 'tcc' && (
            <TccView 
              tccData={tccData} 
              setTccData={setTccData} 
            />
          )}

          {activeTab === 'agenda' && (
            <AgendaEmailView />
          )}

          {activeTab === 'perfil' && (
            <PerfilView 
              userProfile={userProfile} 
              setUserProfile={setUserProfile} 
            />
          )}
        </main>
      </div>

      {/* Register Hours Modal */}
      {isStudyModalOpen && (
        <RegisterStudyModal 
          onClose={() => setIsStudyModalOpen(false)} 
          onSubmit={handleRegisterStudy}
          sectors={studySectorData}
        />
      )}

      {/* Register Questions Modal */}
      {isQuestionModalOpen && (
        <RegisterQuestionsModal 
          onClose={() => setIsQuestionModalOpen(false)} 
          onSubmit={handleRegisterQuestions}
        />
      )}

    </div>
  );
}

// ==========================================
// 1. DASHBOARD VIEW (DONUT CHART & CARDS)
// ==========================================
function DashboardView({ studySectorData, totalWeeklyHours, stats, userProfile, setActiveTab }) {
  // SVG Custom Donut Chart Calculation
  const totalHours = studySectorData.reduce((acc, s) => acc + s.hours, 0) || 1;
  let accumulatedAngle = 0;

  const donutSegments = studySectorData.map((sector) => {
    const percentage = (sector.hours / totalHours) * 100;
    const strokeDasharray = `${percentage} ${100 - percentage}`;
    const strokeDashoffset = 100 - accumulatedAngle;
    accumulatedAngle += percentage;
    return { ...sector, percentage, strokeDasharray, strokeDashoffset };
  });

  return (
    <div className="space-y-6">
      
      {/* Central Highlithed Donut Chart Card */}
      <div className="p-6 lg:p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-xs text-zinc-400 font-medium">Distribuição Semanal por Setor</span>
        </div>

        {/* SVG Donut Chart */}
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-4 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15.91549430918954"
              fill="transparent"
              stroke="#18181b"
              strokeWidth="3.5"
            />
            {donutSegments.map((segment, idx) => (
              <circle
                key={idx}
                cx="18"
                cy="18"
                r="15.91549430918954"
                fill="transparent"
                stroke={segment.color}
                strokeWidth="3.8"
                strokeDasharray={segment.strokeDasharray}
                strokeDashoffset={segment.strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            ))}
          </svg>

          {/* Donut Center Info */}
          <div className="absolute flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{totalWeeklyHours}h</span>
            <span className="text-[11px] text-zinc-400 font-medium mt-0.5">Total Semanal</span>
          </div>
        </div>

        {/* Sector Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-2">
          {studySectorData.map((sec, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: sec.color }}></span>
              <span className="text-xs font-medium text-zinc-300">{sec.name}: <strong className="text-white">{sec.hours}h</strong></span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Performance Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-3.5">
          <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900 border border-purple-500/30 text-purple-400 shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-zinc-400 block">Meta Semanal</span>
            <strong className="text-lg font-bold text-white">{totalWeeklyHours}h / {userProfile.goalHoursPerWeek}h</strong>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-3.5">
          <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900 border border-purple-500/30 text-purple-400 shrink-0">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-zinc-400 block">Questões Feitas</span>
            <strong className="text-lg font-bold text-white">{stats.totalQuestions} qst</strong>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-3.5">
          <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900 border border-purple-500/30 text-purple-400 shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-zinc-400 block">Taxa de Acertos</span>
            <strong className="text-lg font-bold text-purple-400">{stats.accuracyRate}%</strong>
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-3.5">
          <div className="p-2.5 sm:p-3 rounded-xl bg-zinc-900 border border-purple-500/30 text-purple-400 shrink-0">
            <Video className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-zinc-400 block">Aulas Assistidas</span>
            <strong className="text-lg font-bold text-white">{stats.completedClasses} aulas</strong>
          </div>
        </div>

      </div>

      {/* Quick Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
        
        <button onClick={() => setActiveTab('oab')} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 text-left transition-all group">
          <div className="flex items-center justify-between mb-2">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
          </div>
          <h4 className="text-xs font-bold text-white">2ª Fase OAB (Trabalho)</h4>
          <p className="text-[11px] text-zinc-400 mt-0.5">Cronograma do Gran & Pecas</p>
        </button>

        <button onClick={() => setActiveTab('faculdade')} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 text-left transition-all group">
          <div className="flex items-center justify-between mb-2">
            <BookOpen className="w-5 h-5 text-purple-400" />
            <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
          </div>
          <h4 className="text-xs font-bold text-white">UniDon & JACAD</h4>
          <p className="text-[11px] text-zinc-400 mt-0.5">Prazos e Calendario Academico</p>
        </button>

        <button onClick={() => setActiveTab('concurso')} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 text-left transition-all group">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-5 h-5 text-purple-400" />
            <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
          </div>
          <h4 className="text-xs font-bold text-white">Concurso Público</h4>
          <p className="text-[11px] text-zinc-400 mt-0.5">Ciclo TRF & Questoes</p>
        </button>

        <button onClick={() => setActiveTab('tcc')} className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 text-left transition-all group">
          <div className="flex items-center justify-between mb-2">
            <Briefcase className="w-5 h-5 text-purple-400" />
            <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
          </div>
          <h4 className="text-xs font-bold text-white">Artigo / TCC</h4>
          <p className="text-[11px] text-zinc-400 mt-0.5">Capitulos & Orientacao</p>
        </button>

      </div>

    </div>
  );
}

// ==========================================
// 2. 2ª FASE OAB VIEW (CRONOGRAMA DO GRAN PDF)
// ==========================================
function Oab2aFaseView({ oabSchedule, toggleOabClass, stats }) {
  const [selectedMonth, setSelectedMonth] = useState('Todos');

  const filteredSchedule = selectedMonth === 'Todos' 
    ? oabSchedule 
    : oabSchedule.filter(item => item.month === selectedMonth);

  const totalInList = filteredSchedule.length;
  const doneInList = filteredSchedule.filter(i => i.done).length;
  const progressPct = totalInList > 0 ? ((doneInList / totalInList) * 100).toFixed(0) : 0;

  return (
    <div className="space-y-6">
      
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white">2ª Fase OAB — Direito do Trabalho (48º Exame)</h2>
          <p className="text-xs text-zinc-400 mt-0.5">Cronograma oficial Gran Cursos (Profª. Aryanna Linhares)</p>
        </div>

        <a 
          href="https://www.grancursosonline.com.br/aluno/curso/s/2-fase-oab-48-exame-direito-do-trabalho" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-1.5 text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/30 px-3 py-2 rounded-xl hover:bg-purple-500/20 transition-all w-fit"
        >
          <span>Abrir no Gran</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Course Stats Card */}
      <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Evolução do Cronograma</span>
          <div className="text-2xl font-extrabold text-white">{doneInList} de {totalInList} Aulas Concluídas ({progressPct}%)</div>
        </div>

        <div className="w-full md:w-64 space-y-1.5">
          <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
            <div style={{ width: `${progressPct}%` }} className="h-full bg-purple-400 transition-all duration-300"></div>
          </div>
          <span className="text-[10px] text-zinc-400 block text-right">Sincronizado com o Gráfico Inicial</span>
        </div>
      </div>

      {/* Month Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {['Todos', 'Novembro/2026', 'Dezembro/2026', 'Janeiro/2027'].map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
              selectedMonth === month 
                ? 'bg-purple-500 text-black border-purple-400' 
                : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Schedule Checklist List */}
      <div className="space-y-3">
        {filteredSchedule.map((item) => (
          <div 
            key={item.id} 
            className={`p-4 rounded-2xl border transition-all flex items-start justify-between gap-4 ${
              item.done 
                ? 'bg-zinc-950/40 border-purple-500/20 text-zinc-400' 
                : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700 text-white'
            }`}
          >
            <div className="flex items-start gap-3.5">
              <button 
                onClick={() => toggleOabClass(item.id)}
                className={`mt-0.5 p-1 rounded-lg border transition-all ${
                  item.done 
                    ? 'bg-purple-500 text-black border-purple-400' 
                    : 'bg-zinc-900 text-zinc-600 border-zinc-800 hover:border-purple-500/50'
                }`}
              >
                <CheckSquare className="w-4 h-4 stroke-[2.5]" />
              </button>

              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-md">
                    {item.date}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-medium">
                    {item.module}
                  </span>
                </div>

                <h4 className={`text-xs font-bold mt-1.5 ${item.done ? 'line-through text-zinc-500' : 'text-zinc-100'}`}>
                  {item.title}
                </h4>
              </div>
            </div>

            <span className="text-[10px] text-zinc-500 font-mono whitespace-nowrap pt-1">
              {item.type}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

// ==========================================
// 3. FACULDADE VIEW (UNIDON & JACAD)
// ==========================================
function FaculdadeView({ faculdadeData, setFaculdadeData }) {
  return (
    <div className="space-y-6">
      
      <div>
        <h2 className="text-xl font-bold text-white">Faculdade (UniDon & JACAD)</h2>
        <p className="text-xs text-zinc-400 mt-0.5">Atalhos rápidos para portais e controle de prazos das disciplinas</p>
      </div>

      {/* External Platforms Shortcuts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <a 
          href="https://unidon.brightspace.com/d2l/home" 
          target="_blank" 
          rel="noreferrer"
          className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 transition-all flex items-center justify-between group"
        >
          <div className="space-y-1">
            <span className="text-[10px] text-purple-400 font-semibold uppercase">SAVA / AVA</span>
            <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">UniDon Brightspace</h3>
            <p className="text-xs text-zinc-400">Acesse aulas online e entregas de trabalhos</p>
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition-colors" />
        </a>

        <a 
          href="https://dondomenico.jacad.com.br/calendario/visualiza/150" 
          target="_blank" 
          rel="noreferrer"
          className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-purple-500/50 transition-all flex items-center justify-between group"
        >
          <div className="space-y-1">
            <span className="text-[10px] text-purple-400 font-semibold uppercase">Portal Acadêmico</span>
            <h3 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">JACAD Don Domenico</h3>
            <p className="text-xs text-zinc-400">Calendário de provas e notas acadêmicas</p>
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 transition-colors" />
        </a>

      </div>

      {/* Subjects & Assignments List */}
      <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
        <h3 className="text-sm font-bold text-white">Disciplinas do Semestre & Entregas</h3>

        <div className="space-y-3">
          {faculdadeData.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-black border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-xs font-bold text-white">{item.name}</h4>
                <p className="text-[11px] text-zinc-400 mt-0.5">Professor: {item.professor}</p>
                <div className="mt-1.5 text-xs text-purple-300">
                  Próxima Entrega: <strong className="text-zinc-200">{item.pendingAssignment}</strong> ({item.date})
                </div>
              </div>

              <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-zinc-900 pt-2 sm:pt-0 sm:pl-4">
                <span className="text-[10px] text-zinc-500 block">Nota Atual</span>
                <strong className="text-base font-bold text-purple-400">{item.grade}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ==========================================
// 4. CONCURSO PÚBLICO VIEW
// ==========================================
function ConcursoView({ concursoData, setConcursoData }) {
  const toggleReview = (id) => {
    setConcursoData(prev => ({
      ...prev,
      subjects: prev.subjects.map(sub => sub.id === id ? { ...sub, reviewed: !sub.reviewed } : sub)
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white">Concurso Público</h2>
        <p className="text-xs text-zinc-400 mt-0.5">Edital esquematizado e ciclo de matérias do TRF</p>
      </div>

      <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-purple-400 font-semibold uppercase">Cargo Alvo</span>
          <h3 className="text-base font-bold text-white mt-0.5">{concursoData.targetRole}</h3>
        </div>
        <div className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 font-bold text-xs">
          Edital: {concursoData.editalStatus}
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-3">
        <h4 className="text-sm font-semibold text-white">Ciclo de Matérias & Estatísticas</h4>

        {concursoData.subjects.map((s) => (
          <div key={s.id} className="p-4 rounded-xl bg-black border border-zinc-800 flex items-center justify-between gap-4">
            <div>
              <h5 className="text-xs font-bold text-white">{s.name}</h5>
              <p className="text-[11px] text-zinc-400 mt-0.5">{s.questionsDone} questões • <span className="text-purple-300 font-semibold">{s.accuracy}% acertos</span></p>
            </div>

            <button 
              onClick={() => toggleReview(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                s.reviewed 
                  ? 'bg-purple-500/10 text-purple-300 border-purple-500/30' 
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {s.reviewed ? 'Revisado' : 'Marcar Revisão'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 5. TCC VIEW
// ==========================================
function TccView({ tccData, setTccData }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white">Controle de TCC / Artigo</h2>
        <p className="text-xs text-zinc-400 mt-0.5">Acompanhamento dos capítulos e prazos do trabalho acadêmico</p>
      </div>

      <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
        <div>
          <span className="text-[10px] text-purple-400 font-semibold uppercase tracking-wider">Tema de Pesquisa</span>
          <h3 className="text-base font-bold text-white mt-1">{tccData.title}</h3>
          <p className="text-xs text-zinc-400 mt-1">Orientador(a): <strong className="text-zinc-200">{tccData.advisor}</strong> • Entrega: <strong className="text-purple-300">{tccData.deadline}</strong></p>
        </div>

        <div className="pt-4 border-t border-zinc-900 space-y-3">
          <h4 className="text-xs font-semibold text-white">Capítulos do Artigo</h4>
          
          {tccData.chapters.map((ch) => (
            <div key={ch.id} className="p-4 rounded-xl bg-black border border-zinc-800 flex items-center justify-between gap-4">
              <div>
                <h5 className="text-xs font-semibold text-white">{ch.title}</h5>
                <span className="text-[10px] text-zinc-400">Status: {ch.status}</span>
              </div>

              <div className="w-28">
                <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                  <div style={{ width: `${ch.progress}%` }} className="h-full bg-purple-400"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 6. AGENDA GOOGLE & E-MAIL VIEW
// ==========================================
function AgendaEmailView() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white">Google Agenda & E-mail</h2>
        <p className="text-xs text-zinc-400 mt-0.5">Central de agendamentos e atalhos diretos</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Google Calendar Card */}
        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
          <div className="flex items-center gap-3">
            <CalendarIcon className="w-5 h-5 text-purple-400" />
            <div>
              <h3 className="font-bold text-white text-sm">Google Agenda</h3>
              <p className="text-xs text-zinc-400">Sincronização de compromissos</p>
            </div>
          </div>

          <a 
            href="https://calendar.google.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-full py-2.5 bg-zinc-900 border border-purple-500/30 hover:bg-zinc-800 text-purple-300 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Abrir Google Agenda</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Gmail Card */}
        <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-purple-400" />
            <div>
              <h3 className="font-bold text-white text-sm">E-mail (Gmail)</h3>
              <p className="text-xs text-zinc-400">Notificações acadêmicas e prazos</p>
            </div>
          </div>

          <a 
            href="https://mail.google.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-full py-2.5 bg-zinc-900 border border-purple-500/30 hover:bg-zinc-800 text-purple-300 text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Abrir Caixas de Entrada</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 7. PERFIL VIEW
// ==========================================
function PerfilView({ userProfile, setUserProfile }) {
  const [name, setName] = useState(userProfile.name);
  const [goal, setGoal] = useState(userProfile.goalHoursPerWeek);

  const handleSave = (e) => {
    e.preventDefault();
    setUserProfile({ ...userProfile, name, goalHoursPerWeek: parseInt(goal) || 35 });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-white">Perfil e Configurações</h2>
        <p className="text-xs text-zinc-400 mt-0.5">Ajuste suas metas e dados pessoais</p>
      </div>

      <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 max-w-md">
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="text-xs text-zinc-400 block mb-1">Nome</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-xs text-zinc-400 block mb-1">Meta Semanal de Estudos (Horas)</label>
            <input 
              type="number" 
              value={goal} 
              onChange={(e) => setGoal(e.target.value)}
              className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <button type="submit" className="bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs px-4 py-2.5 rounded-lg transition-all">
            Salvar Meta
          </button>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// MODAL: REGISTRAR HORAS DE ESTUDO
// ==========================================
function RegisterStudyModal({ onClose, onSubmit, sectors }) {
  const [sector, setSector] = useState('2ª Fase OAB (Trabalho)');
  const [hours, setHours] = useState('1.5');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(sector, parseFloat(hours) || 0);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>

        <div>
          <h3 className="text-base font-bold text-white">Registrar Sessão de Estudo</h3>
          <p className="text-xs text-zinc-400">Adiciona horas e atualiza o gráfico donut inicial</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-zinc-400 block mb-1">Setor</label>
            <select 
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            >
              {sectors.map((s, i) => (
                <option key={i} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-zinc-400 block mb-1">Horas Estudadas</label>
            <input 
              type="number" 
              step="0.5"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              required
              className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <button type="submit" className="w-full bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs py-2.5 rounded-lg transition-all mt-2">
            Lançar no Gráfico
          </button>
        </form>
      </div>
    </div>
  );
}

// ==========================================
// MODAL: LANÇAR QUESTÕES
// ==========================================
function RegisterQuestionsModal({ onClose, onSubmit }) {
  const [total, setTotal] = useState('20');
  const [correct, setCorrect] = useState('16');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(parseInt(total) || 0, parseInt(correct) || 0);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>

        <div>
          <h3 className="text-base font-bold text-white">Lançar Bateria de Questões</h3>
          <p className="text-xs text-zinc-400">Atualiza a taxa de acertos global</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-zinc-400 block mb-1">Total de Questões Feitas</label>
            <input 
              type="number" 
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              required
              className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="text-xs text-zinc-400 block mb-1">Total de Acertos</label>
            <input 
              type="number" 
              value={correct}
              onChange={(e) => setCorrect(e.target.value)}
              required
              className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-purple-500"
            />
          </div>

          <button type="submit" className="w-full bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs py-2.5 rounded-lg transition-all mt-2">
            Atualizar Estatísticas
          </button>
        </form>
      </div>
    </div>
  );
}
