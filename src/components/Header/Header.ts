import {
	hideElementClasses,
	hideElementClassesWithoutOpacity,
	opacity0Class,
} from "@/components/Header/constants"

const SECONDS_IN_MS = 1000
const SECONDS_UNIT = "s"

const transformTransitionDurationToMs = (duration: string) => {
	return parseFloat(duration.replace(SECONDS_UNIT, "")) * SECONDS_IN_MS
}

const menuToggle = document.getElementById("menu-toggle")!
const responsiveMenu = document.getElementById("navigation-menu")!

const ANIMATION_DURATION = transformTransitionDurationToMs(
	window.getComputedStyle(responsiveMenu).transitionDuration
)

const state = {
	isMenuOpen: true,
	isButtonClosing: false,
}

const closeMenu = () => {
	state.isButtonClosing = true

	responsiveMenu.classList.add(opacity0Class)

	setTimeout(() => {
		state.isButtonClosing = false
		responsiveMenu.classList.add(...hideElementClassesWithoutOpacity.split(" "))

		hideElementClassesWithoutOpacity.split(" ").forEach((className) => {
			responsiveMenu?.classList.toggle(className)
		})
		state.isMenuOpen = !state.isMenuOpen
	}, ANIMATION_DURATION)
}

const openMenu = () => {
	responsiveMenu.classList.remove(...hideElementClasses.split(" "))

	state.isMenuOpen = !state.isMenuOpen
}

menuToggle.addEventListener("click", () => {
	if (state.isButtonClosing) return

	if (state.isMenuOpen) {
		openMenu()
		return
	}

	closeMenu()
})

document.addEventListener("click", (event) => {
	const target = event.target as Node
	const isClickInsideMenu = responsiveMenu.contains(target)
	const isClickOnToggle = menuToggle.contains(target)

	if (!isClickInsideMenu && !isClickOnToggle) {
		console.log("isClickInsideMenu")
		closeMenu()
	}
})
