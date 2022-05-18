export interface UILoV {
  id?: string;
  name?: string;
}

export interface APILoV {
  id: number;
  name: string;
}

export const mapToAPILoV = (uiLoV: UILoV): APILoV => {
  return { id: parseInt(uiLoV.id), name: uiLoV.name };
};
