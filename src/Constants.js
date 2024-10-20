export const INITIAL_PATH="/"
export const LEAD_DETAILS_PATH = "/lead/:leadId"
export const ACTIVITIES_PATH = "/lead/:leadId/activities"
export const REMARK_PATH = "/lead/:leadId/remark"
export const DOCS_PATH="/lead/:leadId/document"
export const CALL_LOG_PATH="/lead/:leadId/call"
export const HISTORY_PATH="/lead/:leadId/history"

export const DATE_FORMAT="DD/MM/YYYY"

export const EMAIL="EMAIL"
export const PHONE="PHONE_NUMBER"
export const SMALL_TEXT="SMALL_TEXT"
export const LONG_TEXT="LONG_TEXT"
export const DROPDOWN="DROPDOWN"
export const NUMBER="NUMBER"
export const DATE="DATE"
export const MULTI_SELECT="MULTI_SELECT"
export const CHECKBOX_GROUP="CHECKBOX_GROUP"
export const IDENTIFY_URL="http"
export const LIMIT_OF_SECTION=2

export const TYPE_OF_INPUT='checkbox'
export const CHECKBOX_ID="toggle"


export const navigateLead = (leadId)=>{
    return `/lead/${leadId}`
}
export const navigateActivities = (leadId)=>{
    return `/lead/${leadId}/activities`
}
export const navigateRemark = (leadId)=>{
    return `/lead/${leadId}/remark`
}
export const navigateDoc = (leadId)=>{
    return `/lead/${leadId}/document`
}
export const navigateCall = (leadId)=>{
    return `/lead/${leadId}/call`
}
export const navigateHistory = (leadId)=>{
    return `/lead/${leadId}/history`
}
 