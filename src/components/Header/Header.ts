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
	isMenuOpen: false,
	isButtonClosing: false,
}

const closeMenu = () => {
	responsiveMenu.classList.add(opacity0Class)
	state.isButtonClosing = true
	setTimeout(() => {
		state.isButtonClosing = false
		responsiveMenu.classList.add(...hideElementClassesWithoutOpacity.split(" "))

		hideElementClassesWithoutOpacity.split(" ").forEach((className) => {
			responsiveMenu?.classList.toggle(className)
		})

		state.isMenuOpen = false
	}, ANIMATION_DURATION)
}

const openMenu = () => {
	responsiveMenu.classList.remove(...hideElementClasses.split(" "))
}

menuToggle.addEventListener("click", () => {
	if (state.isButtonClosing) return

	if (!state.isMenuOpen) {
		state.isMenuOpen = true
		openMenu()
		return
	}

	closeMenu()
})

document.addEventListener("click", (event) => {
	if (!state.isMenuOpen) return

	const target = event.target as Node
	const isClickInsideMenu = responsiveMenu.contains(target)
	const isClickOnToggle = menuToggle.contains(target)

	if (!isClickInsideMenu && !isClickOnToggle) {
		closeMenu()
	}
})
