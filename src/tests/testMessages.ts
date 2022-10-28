export const testMessages = {
	exists: (value: string) => `*Você declarou ${value}?`,
	maxSize: (value: string, maxSize: number) =>
		`*O valor de ${value} tem até ${maxSize} caracteres?`,
    logged: (value: string) => `*Você logou ${value}?`,
    equals: (value: string, toEqual: string) => `*${value} é igual a ${toEqual}?`
};
