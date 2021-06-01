export const formation = {
    formID(id) {
        return String(id).replace(/(\d{3})/g, '$1 ').replace(/(^\s+|\s+$)/, '')
    },
    formName(name) {
        if (name.length > 70) {
            const Name = name.substr(0, 70) + ' ...'
            return Name
        } else return name
    },
    formStatuses(statuses, statusId) {
        return statuses.find(f => f.id === statusId ? f : '')
    },
    formPriorities(priorities, priorityId) {
        return priorities.find(f => f.id === priorityId ? f : '')
    },
    formDate(date) {
        const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
        const dat = new Date(date)
        const time = dat.getDate() + ' ' + month[dat.getMonth()] + ' ' + (dat.getHours() > 10 ? dat.getHours() : '0' + dat.getHours()) + ':' + (dat.getMinutes() >= 10 ? dat.getMinutes() : '0' + dat.getMinutes())
        return time
    },
    formResolution(date) {
        const dat = new Date(date)
        const time = dat.getDate() + '.' + (dat.getMonth() < 10? '0' + Number(dat.getMonth() + 1)  : Number(dat.getMonth() + 1))+ '.' + dat.getFullYear() + 'г.'
        return time
    }

}