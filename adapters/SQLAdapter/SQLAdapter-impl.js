/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 

var pass1 = WL.Server.createSQLStatement("select password from personal_info where student_id = ?");
function procedure1(studentid){
	
	return WL.Server.invokeSQLStatement({
        preparedStatement : pass1,
        parameters : [studentid]
    });
	
	
}



/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
 


