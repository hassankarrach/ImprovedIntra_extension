export function getClonedEl(selector: string): HTMLElement | null {
    const element = document.querySelector(selector) as HTMLElement | null;
  
    if (element) {
      return element.cloneNode(true) as HTMLElement;
    } else {
      console.warn(`cloneElement: No element found for selector "${selector}"`);
      return null;
    }
  }
  