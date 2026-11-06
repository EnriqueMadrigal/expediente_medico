export interface Traumatismo {
  id: number;                       // INT, PK
  id_paciente: number;                  // VARCHAR(36), UUID
  traumatismo: boolean;
  id_trauma: number;
  trauma: string;                
  zona_afectada: string;
  fecha: Date | string;
  id_tratamiento: number;
  tratamiento: string;  
  secuelas: boolean;
  id_secuela: number;
  secuela: string;
  observaciones: string;
  created_at:  Date | string;               // DATETIME -> ISO string
  updated_at:  Date | string;        // DATETIME -> ISO string or null
}
