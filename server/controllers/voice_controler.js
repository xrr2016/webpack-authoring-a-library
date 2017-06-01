import Voice from '../models/voice'

// 获取全部 voice
export const getAllVoices = async (ctx) => {
  ctx.body = await Voice.all()
}

// 获取单个 voice
export const getOneVoice = async (ctx) => {
  ctx.body = await Voice.findOne({
    where: { id: ctx.params.id }
  })
}

// 新增一个 voice
export const createVoice = async (ctx) => {
  const { content, author, tags, likes } = ctx.request.body
  const newVoice = await Voice.build({
    content, author, tags, likes
  })
  ctx.body = await newVoice.save()
}

// 更新一个 voice
export const updateVoice = async (ctx) => {
  const updateVoice = await Voice.findOne({ where: { id: ctx.params.id } })
  const { content, likes, tags } = ctx.request.body
  ctx.body = await updateVoice.update({
    content,
    likes,
    tags
  })
}

// 删除一个 voice
export const deleteVoice = async (ctx) => {
  const voice = await Voice.findOne({ where: { id: ctx.params.id } })
  ctx.body = voice.destroy({ force: true })
}
