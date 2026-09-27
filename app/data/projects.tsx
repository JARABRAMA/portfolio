import { PortfolioCardProps } from "../components/athoms/PortfolioCard";

export const projects: PortfolioCardProps[] = [
  {
    title: "Familiar Tasks — Home Task Manager",
    description: "Arquitectura orientada a microservicios con enfoque hexagonal. Implementé el servicio de autenticación con Spring Security y JWT, además de comunicación basada en eventos entre servicios usando Azure Storage Queues. Incluye pipeline CI/CD con despliegue continuo en Render.",
    github: "",
    icon: "mdi:server-network"
  },
  {
    title: "Scholar System — Course & Grade Management",
    description: "Sistema para la gestión de cursos, grupos, calificaciones, docentes y estudiantes, con arquitectura orientada a servicios y patrón por capas. Implementé los servicios de autenticación y lógica de negocio usando Spring JPA para la persistencia, aplicando patrones de diseño y clean code.",
    github: "",
    icon: "mdi:database-cog"
  },
  {
    title: "Scholar System — Course & Grade Management",
    description: "Frontend que consume múltiples servicios del sistema, construido con componentes en React y manejo de estado global mediante Zustand, con estilos implementados en Tailwind CSS.",
    github: "",
    icon: "mdi:react"
  }
]; 