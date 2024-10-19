const trimCharacter = (str: string, charToRemove: string) => {
	const escapedChar = charToRemove.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") // Escape special regex characters
	const regex = new RegExp(`^${escapedChar}+|${escapedChar}+$`, "g")
	return str.replace(regex, "")
}

export default trimCharacter
