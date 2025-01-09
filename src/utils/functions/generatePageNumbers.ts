export function generatePageNumbers(currentPage: number, totalPages: number): (number | string)[] {
	if (totalPages <= 7) {
		return Array.from({ length: totalPages }, (_, i) => i + 1);
	}

	const pages: (number | string)[] = [1];

	if (currentPage > 3) {
		pages.push('...');
	}

	const start = Math.max(2, Math.min(currentPage - 1, totalPages - 4));
	const end = Math.min(totalPages - 1, Math.max(currentPage + 1, 5));

	for (let i = start; i <= end; i++) {
		pages.push(i);
	}

	if (currentPage < totalPages - 2) {
		pages.push('...');
	}

	pages.push(totalPages);

	return pages;
}
