import capitalize from "@/utils/capitalize"
import trimCharacter from "@/utils/trimCharacter"

const PATH_SEPARATOR = "/"

export type BreadCrumb = {
	name: string
	url: string
}

const formatBreadCrumbName = (partName: string) => capitalize(partName?.replaceAll("-", " ") ?? "")

const getBreadcrumbs = (path: string): BreadCrumb[] => {
	if (!path) return []
	if (path === PATH_SEPARATOR) return []

	const root = {
		name: "Home",
		url: "/",
	}

	const parts = trimCharacter(path, PATH_SEPARATOR).split(PATH_SEPARATOR)

	const breadcrumbs: BreadCrumb[] = []
	for (let index = 1; index <= parts.length; index++) {
		const breadcrumb = `${PATH_SEPARATOR}${parts.slice(0, index).join(PATH_SEPARATOR)}`

		const partName = parts[index - 1]

		breadcrumbs.push({
			name: formatBreadCrumbName(partName ?? ""),
			url: breadcrumb,
		})
	}

	return [root, ...breadcrumbs]
}

export default getBreadcrumbs
