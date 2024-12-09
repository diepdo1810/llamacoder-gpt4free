import { ModelInfo, OllamaApiResponse, OllamaModel } from "./llms.type";

export const DEFAULT_LLM = 'deepseek-coder';
export const DEFAULT_PROVIDER = 'Deepseek';
export const SHADCN = true;

export const llms: ModelInfo[] = [
    { name: 'gpt-4o', label: 'GPT-4o', provider: 'OpenAI' },
    { name: 'anthropic/claude-3.5-sonnet', label: 'Anthropic: Claude 3.5 Sonnet (OpenRouter)', provider: 'OpenRouter' },
    { name: 'anthropic/claude-3-5-haiku', label: 'Anthropic: Claude 3.5 Haiku (OpenRouter)', provider: 'OpenRouter' },
    { name: 'deepseek/deepseek-coder', label: 'Deepseek-Coder V2 236B (OpenRouter)', provider: 'OpenRouter' },
    { name: 'google/gemini-flash-1.5', label: 'Google Gemini Flash 1.5 (OpenRouter)', provider: 'OpenRouter' },
    { name: 'google/gemini-pro-1.5', label: 'Google Gemini Pro 1.5 (OpenRouter)', provider: 'OpenRouter' },
    { name: 'x-ai/grok-beta', label: "xAI Grok Beta (OpenRouter)", provider: 'OpenRouter' },
    { name: 'mistralai/mistral-nemo', label: 'OpenRouter Mistral Nemo (OpenRouter)', provider: 'OpenRouter' },
    { name: 'qwen/qwen-110b-chat', label: 'OpenRouter Qwen 110b Chat (OpenRouter)', provider: 'OpenRouter' },
    { name: 'cohere/command', label: 'Cohere Command (OpenRouter)', provider: 'OpenRouter' },
    { name: 'deepseek/deepseek-chat', label: 'Deepseek V2.5 (OpenRouter)', provider: 'OpenRouter' },
    { name: 'qwen/qwen-2.5-coder-32b-instruct', label: 'Qwen 2.5 Coder 32b Instruct (OpenRouter)', provider: 'OpenRouter' },
    { name: 'qwen/qwen-2.5-72b-instruct', label: 'Qwen 2.5 72B Instruct (OpenRouter)', provider: 'OpenRouter' },
    { name: 'openai/gpt-4o-mini-2024-07-18', label: 'Gpt-4o Mini (OpenRouter)', provider: 'OpenRouter' },
    { name: 'openai/chatgpt-4o-latest', label: 'Gpt-4o (OpenRouter)', provider: 'OpenRouter' },
    { name: 'google/gemini-flash-1.5', label: 'Gemini 1.5 Flash (OpenRouter)', provider: 'OpenRouter' },
    { name: 'gemini-1.5-flash-latest', label: 'Gemini 1.5 Flash', provider: 'Google' },
    { name: 'gemini-1.5-pro-latest', label: 'Gemini 1.5 Pro', provider: 'Google' },
    { name: 'llama-3.2-90b-vision-preview', label: 'Llama 3.2 90b (Groq)', provider: 'Groq' },
    { name: 'llama-3.1-70b-versatile', label: 'Llama 3.1 70b (Groq)', provider: 'Groq' },
    { name: 'mixtral-8x7b-32768', label: 'Mistral 8x7B (Groq)', provider: 'Groq' },
    { name: 'llama-3.1-8b-instant', label: 'Llama 3.1 8b (Groq)', provider: 'Groq' },
    { name: 'llama-3.2-11b-vision-preview', label: 'Llama 3.2 11b (Groq)', provider: 'Groq' },
    { name: 'llama-3.2-3b-preview', label: 'Llama 3.2 3b (Groq)', provider: 'Groq' },
    { name: 'llama-3.2-1b-preview', label: 'Llama 3.2 1b (Groq)', provider: 'Groq' },
    { name: 'claude-3-5-sonnet-latest', label: 'Claude 3.5 Sonnet (new)', provider: 'Anthropic' },
    { name: 'claude-3-5-sonnet-20240620', label: 'Claude 3.5 Sonnet (old)', provider: 'Anthropic' },
    { name: 'claude-3-5-haiku-latest', label: 'Claude 3.5 Haiku (new)', provider: 'Anthropic' },
    { name: 'claude-3-opus-latest', label: 'Claude 3 Opus', provider: 'Anthropic' },
    { name: 'claude-3-sonnet-20240229', label: 'Claude 3 Sonnet', provider: 'Anthropic' },
    { name: 'claude-3-haiku-20240307', label: 'Claude 3 Haiku', provider: 'Anthropic' },
    { name: 'gpt-4o-mini', label: 'GPT-4o Mini', provider: 'OpenAI' },
    { name: 'gpt-4-turbo', label: 'GPT-4 Turbo', provider: 'OpenAI' },
    { name: 'gpt-4', label: 'GPT-4', provider: 'OpenAI' },
    { name: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo', provider: 'OpenAI' },
    { name: 'grok-beta', label: "xAI Grok Beta", provider: 'xAI' },
    { name: 'deepseek-coder', label: 'Deepseek Coder', provider: 'Deepseek'},
    { name: 'open-mistral-7b', label: 'Mistral 7B', provider: 'Mistral' },
    { name: 'open-mixtral-8x7b', label: 'Mistral 8x7B', provider: 'Mistral' },
    { name: 'open-mixtral-8x22b', label: 'Mistral 8x22B', provider: 'Mistral' },
    { name: 'open-codestral-mamba', label: 'Codestral Mamba', provider: 'Mistral' },
    { name: 'open-mistral-nemo', label: 'Mistral Nemo', provider: 'Mistral' },
    { name: 'ministral-8b-latest', label: 'Mistral 8B', provider: 'Mistral' },
    { name: 'mistral-small-latest', label: 'Mistral Small', provider: 'Mistral' },
    { name: 'pixtral-large-2411', label: 'Pixtral Large', provider: 'Mistral' },
    { name: 'mistral-large-2411', label: 'Mistral Large 3', provider: 'Mistral' },
    { name: 'codestral-latest', label: 'Codestral', provider: 'Mistral' },
    { name: 'Qwen/Qwen2.5-Coder-32B-Instruct', label: 'Qwen2.5 Coder 32B Instruct', provider: 'OpenAILike' },
    { name: 'Qwen/QwQ-32B-Preview', label: 'QwQ 32B Preview', provider: 'OpenAILike' },
    { name: 'Qwen/Qwen2-VL-72B-Instruct', label: 'Qwen2 VL 72B Instruct', provider: 'OpenAILike' },
    { name: 'meta-llama/Llama-3.3-70B-Instruct', label: 'Llama 3.3 70B Instruct', provider: 'OpenAILike' },
];

export let MODEL_LIST: ModelInfo[] = [...llms];

const getOllamaBaseUrl = () => {
  const defaultBaseUrl = process.env.OLLAMA_API_BASE_URL || 'http://localhost:11434';
  // Check if we're in the browser
  if (typeof window !== 'undefined') {
    // Frontend always uses localhost
    return defaultBaseUrl;
  }

  // Backend: Check if we're running in Docker
  const isDocker = process.env.RUNNING_IN_DOCKER === 'true';

  return isDocker
    ? defaultBaseUrl.replace("localhost", "host.docker.internal")
    : defaultBaseUrl;
};

async function getOllamaModels(): Promise<ModelInfo[]> {
  try {
    const base_url = getOllamaBaseUrl();
    const response = await fetch(`${base_url}/api/tags`);
    const data = await response.json() as OllamaApiResponse;

    return data.models.map((model: OllamaModel) => ({
      name: model.name,
      label: `${model.name} (${model.details.parameter_size})`,
      provider: 'Ollama',
    }));
  } catch (e) {
    return [];
  }
}

async function getOpenAILikeModels(): Promise<ModelInfo[]> {
  try {
    const base_url = process.env.OPENAI_LIKE_API_BASE_URL || "";
    if (!base_url) {
      return [];
    }

    return [{
      name: 'Qwen/Qwen2.5-Coder-32B-Instruct',
      label: 'Qwen/Qwen2.5-Coder-32B-Instruct',
      provider: 'OpenAILike',
    }];
  } catch (e) {
    return []
  }

}

async function getLMStudioModels(): Promise<ModelInfo[]> {
  try {
    const base_url = process.env.LMSTUDIO_API_BASE_URL || "http://localhost:1234";
    const response = await fetch(`${base_url}/v1/models`);
    const data = await response.json() as any;
    return data.data.map((model: any) => ({
      name: model.id,
      label: model.id,
      provider: 'LMStudio',
    }));
  } catch (e) {
    return [];
  }
}

async function initializeModelList(): Promise<void> {
  const ollamaModels = await getOllamaModels();
  // const openAiLikeModels = await getOpenAILikeModels();
  const lmstudioModels = await getLMStudioModels();
  MODEL_LIST = [...ollamaModels, ...llms,...lmstudioModels,];
  // console.log('Model List:', MODEL_LIST);
}
initializeModelList().then();
export { getOllamaModels,getOpenAILikeModels,getLMStudioModels,initializeModelList };
