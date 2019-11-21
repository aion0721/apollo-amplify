/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = `mutation CreateTodo($input: CreateTodoInput!) {
  createTodo(input: $input) {
    id
    name
    description
    author
  }
}
`;
export const updateTodo = `mutation UpdateTodo($input: UpdateTodoInput!) {
  updateTodo(input: $input) {
    id
    name
    description
    author
  }
}
`;
export const deleteTodo = `mutation DeleteTodo($input: DeleteTodoInput!) {
  deleteTodo(input: $input) {
    id
    name
    description
    author
  }
}
`;
export const createUserinformation = `mutation CreateUserinformation($input: CreateUserinformationInput!) {
  createUserinformation(input: $input) {
    userid
    name
    joinYear
    organization
    interestArea1
    interestArea2
    interestArea3
    profile
  }
}
`;
export const updateUserinformation = `mutation UpdateUserinformation($input: UpdateUserinformationInput!) {
  updateUserinformation(input: $input) {
    userid
    name
    joinYear
    organization
    interestArea1
    interestArea2
    interestArea3
    profile
  }
}
`;
export const deleteUserinformation = `mutation DeleteUserinformation($input: DeleteUserinformationInput!) {
  deleteUserinformation(input: $input) {
    userid
    name
    joinYear
    organization
    interestArea1
    interestArea2
    interestArea3
    profile
  }
}
`;
export const createGoalinformation = `mutation CreateGoalinformation($input: CreateGoalinformationInput!) {
  createGoalinformation(input: $input) {
    id
    userid
    goalName
    goalTestDate
    objectiveStudyTime
    peformanceStudyTimeWeek
    performanceStudyTimeAll
  }
}
`;
export const updateGoalinformation = `mutation UpdateGoalinformation($input: UpdateGoalinformationInput!) {
  updateGoalinformation(input: $input) {
    id
    userid
    goalName
    goalTestDate
    objectiveStudyTime
    peformanceStudyTimeWeek
    performanceStudyTimeAll
  }
}
`;
export const deleteGoalinformation = `mutation DeleteGoalinformation($input: DeleteGoalinformationInput!) {
  deleteGoalinformation(input: $input) {
    id
    userid
    goalName
    goalTestDate
    objectiveStudyTime
    peformanceStudyTimeWeek
    performanceStudyTimeAll
  }
}
`;
export const createStudiedinformation = `mutation CreateStudiedinformation($input: CreateStudiedinformationInput!) {
  createStudiedinformation(input: $input) {
    userid
    studiedExamId
    studiedTestDate
    Score
    result
    referenceBook
    passRecord
    performanceStudyTimeAll
  }
}
`;
export const updateStudiedinformation = `mutation UpdateStudiedinformation($input: UpdateStudiedinformationInput!) {
  updateStudiedinformation(input: $input) {
    userid
    studiedExamId
    studiedTestDate
    Score
    result
    referenceBook
    passRecord
    performanceStudyTimeAll
  }
}
`;
export const deleteStudiedinformation = `mutation DeleteStudiedinformation($input: DeleteStudiedinformationInput!) {
  deleteStudiedinformation(input: $input) {
    userid
    studiedExamId
    studiedTestDate
    Score
    result
    referenceBook
    passRecord
    performanceStudyTimeAll
  }
}
`;
export const createExam = `mutation CreateExam($input: CreateExamInput!) {
  createExam(input: $input) {
    examId
    examName
  }
}
`;
export const updateExam = `mutation UpdateExam($input: UpdateExamInput!) {
  updateExam(input: $input) {
    examId
    examName
  }
}
`;
export const deleteExam = `mutation DeleteExam($input: DeleteExamInput!) {
  deleteExam(input: $input) {
    examId
    examName
  }
}
`;
export const createNotification = `mutation CreateNotification($input: CreateNotificationInput!) {
  createNotification(input: $input) {
    notificationId
    notificationUserId
    notificationCategory
    notificationContents
  }
}
`;
export const updateNotification = `mutation UpdateNotification($input: UpdateNotificationInput!) {
  updateNotification(input: $input) {
    notificationId
    notificationUserId
    notificationCategory
    notificationContents
  }
}
`;
export const deleteNotification = `mutation DeleteNotification($input: DeleteNotificationInput!) {
  deleteNotification(input: $input) {
    notificationId
    notificationUserId
    notificationCategory
    notificationContents
  }
}
`;
export const createSns = `mutation CreateSns($input: CreateSnsInput!) {
  createSns(input: $input) {
    snsId
    snsParentsId
    snsTitle
    snsContents
    snsAuthor
  }
}
`;
export const updateSns = `mutation UpdateSns($input: UpdateSnsInput!) {
  updateSns(input: $input) {
    snsId
    snsParentsId
    snsTitle
    snsContents
    snsAuthor
  }
}
`;
export const deleteSns = `mutation DeleteSns($input: DeleteSnsInput!) {
  deleteSns(input: $input) {
    snsId
    snsParentsId
    snsTitle
    snsContents
    snsAuthor
  }
}
`;
