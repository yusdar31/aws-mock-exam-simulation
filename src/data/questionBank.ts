export type QuestionOption = {
  id: string
  text: string
}

export type ExamQuestion = {
  id: string
  domain: string
  type: 'single' | 'multiple'
  prompt: string
  options: QuestionOption[]
  correctAnswers: string[]
  explanation: string
}

export const questionBank: ExamQuestion[] = [
  {
    id: 'q1',
    domain: 'Resilient Architectures',
    type: 'single',
    prompt:
      'A company runs a business-critical application on Amazon EC2 instances in a single Availability Zone behind an Application Load Balancer. The application must remain available if an Availability Zone fails. Which solution meets this requirement with the least operational overhead?',
    options: [
      {
        id: 'A',
        text: 'Create an Auto Scaling group that spans multiple Availability Zones and register it with the existing Application Load Balancer.',
      },
      {
        id: 'B',
        text: 'Create a second Application Load Balancer in another Availability Zone and update DNS records manually during failure.',
      },
      {
        id: 'C',
        text: 'Create a scheduled Lambda function to copy EC2 instances to another Availability Zone every hour.',
      },
      {
        id: 'D',
        text: 'Move the application to a single larger EC2 instance with enhanced networking.',
      },
    ],
    correctAnswers: ['A'],
    explanation:
      'An Auto Scaling group across multiple Availability Zones with an Application Load Balancer is the standard highly available design for EC2 workloads. It automatically replaces unhealthy instances and shifts traffic away from a failed Availability Zone without manual intervention.',
  },
  {
    id: 'q2',
    domain: 'Secure Architectures',
    type: 'multiple',
    prompt:
      'A solutions architect needs to secure objects in an Amazon S3 bucket so that data is encrypted at rest and accessible only from a specific VPC endpoint. Which combination of actions should the architect take?',
    options: [
      {
        id: 'A',
        text: 'Enable server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys on the bucket.',
      },
      {
        id: 'B',
        text: 'Attach a bucket policy that allows access only when aws:sourceVpce matches the required VPC endpoint.',
      },
      {
        id: 'C',
        text: 'Store the bucket in a private subnet to prevent public access.',
      },
      {
        id: 'D',
        text: 'Enable S3 Transfer Acceleration to force encrypted access through edge locations.',
      },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'S3 encryption at rest is achieved with server-side encryption, while private network restriction to a specific VPC endpoint is enforced with a bucket policy using the aws:sourceVpce condition key. S3 buckets are not placed in subnets, so option C is invalid.',
  },
  {
    id: 'q3',
    domain: 'High-Performing Architectures',
    type: 'single',
    prompt:
      'A workload stores frequently accessed session data that must be retrieved with sub-millisecond latency. The data set is small enough to fit entirely in memory. Which AWS service is the best fit?',
    options: [
      { id: 'A', text: 'Amazon Aurora Serverless v2' },
      { id: 'B', text: 'Amazon ElastiCache for Redis' },
      { id: 'C', text: 'Amazon RDS for MySQL with read replicas' },
      { id: 'D', text: 'Amazon S3 Standard' },
    ],
    correctAnswers: ['B'],
    explanation:
      'ElastiCache for Redis is designed for in-memory workloads that require very low latency, such as session stores, leaderboards, and caching layers. The other services are storage or database options with higher latency characteristics.',
  },
  {
    id: 'q4',
    domain: 'Cost-Optimized Architectures',
    type: 'single',
    prompt:
      'A company needs durable object storage for backup files that are rarely accessed, but when needed, retrieval can take several hours. Which S3 storage class is the most cost-effective choice?',
    options: [
      { id: 'A', text: 'S3 Standard' },
      { id: 'B', text: 'S3 Intelligent-Tiering' },
      { id: 'C', text: 'S3 Glacier Flexible Retrieval' },
      { id: 'D', text: 'S3 One Zone-IA' },
    ],
    correctAnswers: ['C'],
    explanation:
      'S3 Glacier Flexible Retrieval is intended for long-lived archive data with infrequent access and retrieval times measured in minutes to hours. It delivers significantly lower storage costs than frequently accessed classes.',
  },
  {
    id: 'q5',
    domain: 'Secure Architectures',
    type: 'multiple',
    prompt:
      'A company wants to provide temporary AWS access to an application that runs on Amazon EC2. The application must upload files to Amazon S3 without storing long-term credentials on the instance. Which actions should the solutions architect recommend?',
    options: [
      {
        id: 'A',
        text: 'Create an IAM role with the required S3 permissions and attach it to the EC2 instance profile.',
      },
      {
        id: 'B',
        text: 'Store an IAM user access key in AWS Systems Manager Parameter Store and rotate it manually every month.',
      },
      {
        id: 'C',
        text: 'Allow the application to retrieve temporary credentials from the instance metadata service.',
      },
      {
        id: 'D',
        text: 'Embed root account credentials in an encrypted file on the instance.',
      },
    ],
    correctAnswers: ['A', 'C'],
    explanation:
      'IAM roles for EC2 provide temporary credentials automatically through the instance metadata service, which removes the need to manage or store long-term access keys on the server. This is the recommended AWS pattern for instance-to-service access.',
  },
  {
    id: 'q6',
    domain: 'Resilient Architectures',
    type: 'single',
    prompt:
      'An application writes messages to a queue before processing them asynchronously. During traffic spikes, the processing tier falls behind but the front-end application must continue accepting requests. Which service should be used as the queue?',
    options: [
      { id: 'A', text: 'Amazon SNS' },
      { id: 'B', text: 'Amazon SQS' },
      { id: 'C', text: 'AWS Step Functions' },
      { id: 'D', text: 'Amazon EventBridge' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon SQS decouples application components and absorbs bursts of work, allowing producers to continue operating while consumers process messages at their own pace. SNS and EventBridge are event delivery services, not durable work queues for this use case.',
  },
  {
    id: 'q7',
    domain: 'High-Performing Architectures',
    type: 'multiple',
    prompt:
      'A global company serves static website assets to users around the world from an Amazon S3 bucket. The company wants lower latency and protection against common web exploits. Which combination of services should be used?',
    options: [
      { id: 'A', text: 'Amazon CloudFront in front of the S3 bucket' },
      { id: 'B', text: 'AWS WAF associated with the CloudFront distribution' },
      { id: 'C', text: 'Direct access to the S3 website endpoint from users' },
      { id: 'D', text: 'Amazon Inspector scanning the S3 bucket on every request' },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'CloudFront caches content at edge locations to reduce latency for global users, and AWS WAF can be attached to the distribution to block common attacks such as SQL injection or bad bots. Direct S3 website access does not provide the same caching and protection layer.',
  },
  {
    id: 'q8',
    domain: 'Cost-Optimized Architectures',
    type: 'single',
    prompt:
      'A batch analytics job runs every night for two hours and can tolerate interruptions. Which EC2 purchasing option provides the lowest cost?',
    options: [
      { id: 'A', text: 'On-Demand Instances' },
      { id: 'B', text: 'Reserved Instances' },
      { id: 'C', text: 'Spot Instances' },
      { id: 'D', text: 'Dedicated Hosts' },
    ],
    correctAnswers: ['C'],
    explanation:
      'Spot Instances are ideal for fault-tolerant and interruption-tolerant workloads such as batch processing, data analysis, and stateless jobs. They typically provide the deepest discounts compared with other EC2 purchasing models.',
  },
  {
    id: 'q9',
    domain: 'Resilient Architectures',
    type: 'single',
    prompt:
      'A company needs a database for an e-commerce application. The database must support automatic failover and managed backups with minimal administrative effort. Which solution is most appropriate?',
    options: [
      { id: 'A', text: 'Amazon DynamoDB with DAX' },
      { id: 'B', text: 'Amazon RDS for MySQL Multi-AZ deployment' },
      { id: 'C', text: 'MySQL installed on a single EC2 instance' },
      { id: 'D', text: 'Amazon Redshift' },
    ],
    correctAnswers: ['B'],
    explanation:
      'Amazon RDS Multi-AZ deployments provide synchronous standby infrastructure, automatic failover, managed backups, and patching with far less operational overhead than self-managed databases on EC2. DynamoDB is a different data model and Redshift is for analytics, not OLTP.',
  },
  {
    id: 'q10',
    domain: 'Secure Architectures',
    type: 'single',
    prompt:
      'A company wants to centrally manage and rotate database credentials for several applications. The applications run on AWS and need programmatic retrieval of secrets. Which service should be used?',
    options: [
      { id: 'A', text: 'AWS Secrets Manager' },
      { id: 'B', text: 'Amazon Cognito' },
      { id: 'C', text: 'AWS Shield Advanced' },
      { id: 'D', text: 'AWS Artifact' },
    ],
    correctAnswers: ['A'],
    explanation:
      'AWS Secrets Manager is designed for securely storing, retrieving, and rotating secrets such as database credentials, API keys, and tokens. It integrates directly with applications and AWS services using IAM-based access control.',
  },
  {
    id: 'q11',
    domain: 'High-Performing Architectures',
    type: 'single',
    prompt:
      'A serverless application needs to process image uploads automatically when new objects are written to Amazon S3. Which design is the most operationally efficient?',
    options: [
      { id: 'A', text: 'Use an S3 event notification to invoke an AWS Lambda function' },
      { id: 'B', text: 'Run a cron job on Amazon EC2 to poll the bucket every minute' },
      { id: 'C', text: 'Use Amazon Inspector to detect object creation and start processing' },
      { id: 'D', text: 'Schedule an AWS Glue job to process uploads once per day' },
    ],
    correctAnswers: ['A'],
    explanation:
      'S3 event notifications with Lambda provide an event-driven pattern that is fully managed, scalable, and requires minimal infrastructure management. Polling from EC2 introduces unnecessary operational overhead and latency.',
  },
  {
    id: 'q12',
    domain: 'Cost-Optimized Architectures',
    type: 'multiple',
    prompt:
      'A company runs containerized microservices on Amazon ECS with predictable baseline usage and occasional seasonal spikes. Which purchasing strategy minimizes cost while preserving flexibility?',
    options: [
      {
        id: 'A',
        text: 'Purchase Compute Savings Plans for the steady baseline usage.',
      },
      {
        id: 'B',
        text: 'Use On-Demand capacity for the temporary seasonal spikes.',
      },
      {
        id: 'C',
        text: 'Migrate the entire workload to Dedicated Hosts year-round.',
      },
      {
        id: 'D',
        text: 'Purchase Reserved Instances for Amazon S3 storage capacity.',
      },
    ],
    correctAnswers: ['A', 'B'],
    explanation:
      'Compute Savings Plans reduce cost for predictable ongoing compute usage across eligible services, while On-Demand capacity keeps burst traffic flexible without overcommitting. Dedicated Hosts are usually far more expensive and not appropriate here.',
  },
]
