const authRouter ={
    admin:'*',
    user:['RULE_USER','RULE_DBA'],
    onlyGuest:[]
}
export default authRouter;