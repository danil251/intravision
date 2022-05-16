import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://intravision-task.test01.intravision.ru/'
})
const tenantguid = 'a4f13660-eb8c-45f9-aefe-05dc05cf9b81'

export const tasksAPI = {
    getTasks() {
        return instance.get(`odata/tasks?tenantguid=${tenantguid}`);
    },
    getStatuses() {
        return instance.get(`api/${tenantguid}/Statuses`)
    },
    getPriorities() {
        return instance.get(`api/${tenantguid}/Priorities`)
    },
    postTasks(body) {
        return instance.post(`api/${tenantguid}/Tasks`, body)
    },
    getTask(id) {
        return instance.get(`api/${tenantguid}/Tasks/${id}`)
    },
    getUsers() {
        return instance.get(`api/${tenantguid}/Users`)
    },
    putTasks(body) {
        return instance.put(`api/${tenantguid}/Tasks`, body)
    }
}

