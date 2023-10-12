import { LLM, BaseLLMParams } from "./base.js";
import { getEnvironmentVariable } from "../util/env.js";

/**
 * Interface for CloudflareLLM input parameters.
 */
export interface CloudflareLLMInput extends BaseLLMParams {
  cloudflareAccountId?: string;
  cloudflareApiKey?: string;
  model?: string;
  baseUrl?: string;
}

/**
 * Class representing the CloudflareLLM language model. It extends the LLM (Large
 * Language Model) class, providing a standard interface for interacting
 * with the CloudflareLLM language model.
 */
export class CloudflareLLM extends LLM implements CloudflareLLMInput {
  model = "@cf/meta/llama-2-7b-chat-int8";
  cloudflareAccountId?: string;
  cloudflareApiKey?: string;
  baseUrl?: string;

  constructor(fields?: CloudflareLLMInput) {
    super(fields ?? {});

    this.model = fields?.model ?? this.model;
    this.cloudflareAccountId =
      fields?.cloudflareAccountId ?? getEnvironmentVariable("CLOUDFLARE_ACCOUNT_ID");
    this.cloudflareApiKey =
      fields?.cloudflareApiKey ?? getEnvironmentVariable("CLOUDFLARE_API_KEY");
    this.baseUrl = fields?.baseUrl;
  }

  /**
   * Method to validate the environment. It checks if the CloudflareLLM API key is
   * set. If not, it throws an error.
   */
  validateEnvironment() {
    if (!this.cloudflareAccountId) {
      throw new Error(
        `No Cloudflare account ID found. Please provide it when instantiating the CloudflareLLM class, or set it as "CLOUDFLARE_ACCOUNT_ID" in your environment variables.`
      );
    }
    if (!this.cloudflareApiKey) {
      throw new Error(
        `No Cloudflare API key found. Please provide it when instantiating the CloudflareLLM class, or set it as "CLOUDFLARE_API_KEY" in your environment variables.`
      );
    }
  }

  /** Get the type of LLM. */
  _llmType() {
    return "cloudflare";
  }

  /** Call out to CloudflareLLM's complete endpoint.
   Args:
       prompt: The prompt to pass into the model.

       Returns:
   The string generated by the model.

   Example:
   let response = cloudflareLlm._call("Tell me a joke.");
   */
  async _call(
    prompt: string,
    options: this["ParsedCallOptions"]
  ): Promise<string> {
    this.validateEnvironment();

    const url = `https://api.cloudflare.com/client/v4/accounts/${this.cloudflareAccountId}/ai/run/${this.model}`;
    const headers = {
      Authorization: `Bearer ${this.cloudflareApiKey}`,
      "Content-Type": "application/json",
    };

    const data = { prompt };
    const responseData = await this.caller.callWithOptions({}, async () => {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
        signal: options.signal,
      });
      if (!response.ok) {
        const error = new Error(
          `Cloudflare LLM call failed with status code ${response.status}`
        );
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error as any).response = response;
        throw error;
      }
      return response.json();
    });

    return responseData.result.response;

    // if (
    //   !responseData.completions ||
    //   responseData.completions.length === 0 ||
    //   !responseData.completions[0].data
    // ) {
    //   throw new Error("No completions found in response");
    // }

    // return responseData.completions[0].data.text ?? "";
  }
}
