export default ({isOk = true, code = 200, data}) => {
  return {
    result: isOk ? 'ok' : 'error',
    code: code,
    data: data
  }
}
