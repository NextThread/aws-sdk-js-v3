import {_Tag} from './_Tag';

/**
 * CreateKeyInput shape
 */
export interface CreateKeyInput {
    /**
     * <p>The key policy to attach to the CMK.</p> <p>If you specify a policy and do not set <code>BypassPolicyLockoutSafetyCheck</code> to true, the policy must meet the following criteria:</p> <ul> <li> <p>It must allow the principal that is making the <code>CreateKey</code> request to make a subsequent <a>PutKeyPolicy</a> request on the CMK. This reduces the likelihood that the CMK becomes unmanageable. For more information, refer to the scenario in the <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section in the <i>AWS Key Management Service Developer Guide</i>.</p> </li> <li> <p>The principals that are specified in the key policy must exist and be visible to AWS KMS. When you create a new AWS principal (for example, an IAM user or role), you might need to enforce a delay before specifying the new principal in a key policy because the new principal might not immediately be visible to AWS KMS. For more information, see <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_general.html#troubleshoot_general_eventual-consistency">Changes that I make are not always immediately visible</a> in the <i>IAM User Guide</i>.</p> </li> </ul> <p>If you do not specify a policy, AWS KMS attaches a default key policy to the CMK. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default">Default Key Policy</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The policy size limit is 32 kilobytes (32768 bytes).</p>
     */
    Policy?: string;

    /**
     * <p>A description of the CMK.</p> <p>Use a description that helps you decide whether the CMK is appropriate for a task.</p>
     */
    Description?: string;

    /**
     * <p>The intended use of the CMK.</p> <p>You can use CMKs only for symmetric encryption and decryption.</p>
     */
    KeyUsage?: 'ENCRYPT_DECRYPT'|string;

    /**
     * <p>The source of the CMK's key material.</p> <p>The default is <code>AWS_KMS</code>, which means AWS KMS creates the key material. When this parameter is set to <code>EXTERNAL</code>, the request creates a CMK without key material so that you can import key material from your existing key management infrastructure. For more information about importing key material into AWS KMS, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/importing-keys.html">Importing Key Material</a> in the <i>AWS Key Management Service Developer Guide</i>.</p> <p>The CMK's <code>Origin</code> is immutable and is set when the CMK is created.</p>
     */
    Origin?: 'AWS_KMS'|'EXTERNAL'|string;

    /**
     * <p>A flag to indicate whether to bypass the key policy lockout safety check.</p> <important> <p>Setting this value to true increases the likelihood that the CMK becomes unmanageable. Do not set this value to true indiscriminately.</p> <p>For more information, refer to the scenario in the <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html#key-policy-default-allow-root-enable-iam">Default Key Policy</a> section in the <i>AWS Key Management Service Developer Guide</i>.</p> </important> <p>Use this parameter only when you include a policy in the request and you intend to prevent the principal that is making the request from making a subsequent <a>PutKeyPolicy</a> request on the CMK.</p> <p>The default value is false.</p>
     */
    BypassPolicyLockoutSafetyCheck?: boolean;

    /**
     * <p>One or more tags. Each tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p> <p>Use this parameter to tag the CMK when it is created. Alternately, you can omit this parameter and instead tag the CMK after it is created using <a>TagResource</a>.</p>
     */
    Tags?: Array<_Tag>|Iterable<_Tag>;
}