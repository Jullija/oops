package backend.graphql

import com.netflix.graphql.dgs.autoconfig.DgsAutoConfiguration
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Import

@Configuration
@Import(DgsAutoConfiguration::class)
class GraphQLConfig
