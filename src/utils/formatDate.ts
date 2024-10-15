const formatDate = (dateString: string) => {
	const formatter = new Intl.DateTimeFormat("es-CO", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	})

	const date = new Date(dateString)

	const formattedDate = formatter.format(date)
	return formattedDate
}

export default formatDate
