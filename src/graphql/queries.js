/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    author
  }
}
`;
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      author
    }
    nextToken
  }
}
`;
export const getUserinformation = `query GetUserinformation($id: ID!) {
  getUserinformation(id: $id) {
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
export const listUserinformations = `query ListUserinformations(
  $filter: ModeluserinformationFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserinformations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userid
      name
      joinYear
      organization
      interestArea1
      interestArea2
      interestArea3
      profile
    }
    nextToken
  }
}
`;
export const getGoalinformation = `query GetGoalinformation($id: ID!) {
  getGoalinformation(id: $id) {
    userid
    goalExamId
    goalTestDate
    objectiveStudyTime
    peformanceStudyTimeWeek
    performanceStudyTimeAll
  }
}
`;
export const listGoalinformations = `query ListGoalinformations(
  $filter: ModelgoalinformationFilterInput
  $limit: Int
  $nextToken: String
) {
  listGoalinformations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      userid
      goalExamId
      goalTestDate
      objectiveStudyTime
      peformanceStudyTimeWeek
      performanceStudyTimeAll
    }
    nextToken
  }
}
`;
export const getStudiedinformation = `query GetStudiedinformation($id: ID!) {
  getStudiedinformation(id: $id) {
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
export const listStudiedinformations = `query ListStudiedinformations(
  $filter: ModelstudiedinformationFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudiedinformations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      userid
      studiedExamId
      studiedTestDate
      Score
      result
      referenceBook
      passRecord
      performanceStudyTimeAll
    }
    nextToken
  }
}
`;
export const getExam = `query GetExam($id: ID!) {
  getExam(id: $id) {
    examId
    examName
  }
}
`;
export const listExams = `query ListExams(
  $filter: ModelexamFilterInput
  $limit: Int
  $nextToken: String
) {
  listExams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      examId
      examName
    }
    nextToken
  }
}
`;
