export const GET_JIRA_TASKS = 'GET_JIRA_TASKS';

export function getJiraTasks(data) {
  return {
    type: GET_JIRA_TASKS,
    payload: data
  }
}