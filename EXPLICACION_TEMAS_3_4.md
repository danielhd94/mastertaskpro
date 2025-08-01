# 📚 EXPLICACIÓN VISUAL - TEMAS 3 Y 4 ANGULAR

## 🎯 TEMA 3: COMPONENTES STANDALONE

### 📦 ¿Qué es un Componente Standalone?

```
┌─────────────────────────────────────┐
│        COMPONENTE STANDALONE        │
├─────────────────────────────────────┤
│  standalone: true                   │
│  imports: [CommonModule, FormsModule] │
│  selector: 'app-login'              │
│  templateUrl: './login.component.html' │
│  styleUrl: './login.component.scss' │
└─────────────────────────────────────┘
```

### 🔄 ANTES vs AHORA

```
ANTES (Módulos):
┌─────────────────┐    ┌─────────────────┐
│   AppModule     │    │  LoginModule    │
│  ┌───────────┐  │    │  ┌───────────┐  │
│  │ LoginComp │  │    │  │ LoginComp │  │
│  └───────────┘  │    │  └───────────┘  │
│  ┌───────────┐  │    │  ┌───────────┐  │
│  │RegisterComp│ │    │  │RegisterComp│ │
│  └───────────┘  │    │  └───────────┘  │
└─────────────────┘    └─────────────────┘

AHORA (Standalone):
┌─────────────────┐    ┌─────────────────┐
│  LoginComponent │    │ RegisterComponent│
│  standalone:true│    │  standalone:true│
│  imports: [...] │    │  imports: [...] │
└─────────────────┘    └─────────────────┘
```

## 🔗 TEMA 4: ROUTING MODERNO

### 🛣️ Configuración con provideRouter()

```
┌─────────────────────────────────────┐
│         app.config.ts               │
├─────────────────────────────────────┤
│ providers: [                        │
│   provideRouter(routes),            │ ← Sin RouterModule
│   provideClientHydration()          │
│ ]                                   │
└─────────────────────────────────────┘
```

### 📁 Separación de Rutas

```
┌─────────────────────────────────────┐
│         app.routes.ts               │
├─────────────────────────────────────┤
│ export const routes: Routes = [     │
│   { path: '', redirectTo: '/login' }│
│   {                                 │
│     path: 'login',                  │
│     loadComponent: () =>            │ ← Lazy Loading
│       import('./login/login.component')│
│       .then(m => m.LoginComponent)  │
│   }                                 │
│ ]                                   │
└─────────────────────────────────────┘
```

## 🔄 COMUNICACIÓN ENTRE COMPONENTES

### 📤 @Input y @Output

```
┌─────────────────┐    @Input()    ┌─────────────────┐
│   PADRE         │ ──────────────▶│     HIJO        │
│ DashboardComp   │                │  TasksComponent │
│                 │                │                 │
│ [tasks]="tasks" │                │ @Input() tasks  │
│                 │                │                 │
│ (taskAdded)     │ ◀──────────────│ @Output()       │
│ (taskToggled)   │                │ taskAdded       │
└─────────────────┘                └─────────────────┘
```

### 🔄 Flujo de Datos

```
1. PADRE → HIJO (con @Input)
   Dashboard: [tasks]="tasks"
   Tasks: @Input() tasks: Task[]

2. HIJO → PADRE (con @Output)
   Tasks: this.taskAdded.emit(newTask)
   Dashboard: (taskAdded)="onTaskAdded($event)"
```

## 🚀 LAZY LOADING

### 📦 Carga bajo demanda

```
┌─────────────────────────────────────┐
│         USUARIO ACCEDE              │
├─────────────────────────────────────┤
│ 1. /login → Carga LoginComponent    │
│ 2. /register → Carga RegisterComp   │
│ 3. /dashboard → Carga DashboardComp │
└─────────────────────────────────────┘

┌─────────────────┐    ┌─────────────────┐
│   Bundle        │    │   Bundle        │
│   Principal     │    │   Login         │
│   (pequeño)     │    │   (carga solo   │
│                 │    │    cuando se    │
│                 │    │    necesita)    │
└─────────────────┘    └─────────────────┘
```

## 🧭 NAVEGACIÓN PROGRAMÁTICA

### 🔀 Tipos de Navegación

```
┌─────────────────────────────────────┐
│         Navegación por Template     │
├─────────────────────────────────────┤
│ <a routerLink="/dashboard">         │
│   Ir al Dashboard                   │
│ </a>                                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│      Navegación Programática        │
├─────────────────────────────────────┤
│ this.router.navigate(['/dashboard'])│
│ this.router.navigate(['/login'])    │
└─────────────────────────────────────┘
```

## 📊 RESUMEN VISUAL DEL PROYECTO

```
┌─────────────────────────────────────┐
│           MASTERTASKPRO             │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────┐    ┌─────────┐        │
│  │ LOGIN   │    │REGISTER │        │
│  │(standalone)│ │(standalone)│     │
│  └─────────┘    └─────────┘        │
│       │              │             │
│       └──────────────┘             │
│              │                     │
│         ┌─────────┐                │
│         │DASHBOARD│                │
│         │(standalone)│             │
│         └─────────┘                │
│              │                     │
│         ┌─────────┐                │
│         │ TASKS   │                │
│         │(standalone)│             │
│         └─────────┘                │
│                                     │
│  🔄 @Input/@Output                  │
│  🛣️ provideRouter()                 │
│  📦 Lazy Loading                    │
│  🧭 Navegación Programática         │
└─────────────────────────────────────┘
```

## 🎯 CONCEPTOS CLAVE PARA APRENDER

### ✅ TEMA 3: Componentes Standalone
- [x] `standalone: true`
- [x] Imports directos
- [x] Sin módulos
- [x] @Input() y @Output()
- [x] EventEmitter

### ✅ TEMA 4: Routing
- [x] `provideRouter()` sin RouterModule
- [x] Archivo `routes.ts` separado
- [x] `loadComponent()` para lazy loading
- [x] `router.navigate()` programático
- [x] Rutas con parámetros

## 🚀 BENEFICIOS PARA PRINCIPIANTES

```
┌─────────────────────────────────────┐
│         VENTAJAS DEL PROYECTO      │
├─────────────────────────────────────┤
│ ✅ Código más simple               │
│ ✅ Menos archivos                  │
│ ✅ Fácil de entender               │
│ ✅ Carga más rápida                │
│ ✅ Mejor organización              │
└─────────────────────────────────────┘
```

---
*📚 Material para enseñanza de Angular - Temas 3 y 4* 