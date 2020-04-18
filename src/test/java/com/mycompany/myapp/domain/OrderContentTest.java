package com.mycompany.myapp.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.mycompany.myapp.web.rest.TestUtil;

public class OrderContentTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(OrderContent.class);
        OrderContent orderContent1 = new OrderContent();
        orderContent1.setId(1L);
        OrderContent orderContent2 = new OrderContent();
        orderContent2.setId(orderContent1.getId());
        assertThat(orderContent1).isEqualTo(orderContent2);
        orderContent2.setId(2L);
        assertThat(orderContent1).isNotEqualTo(orderContent2);
        orderContent1.setId(null);
        assertThat(orderContent1).isNotEqualTo(orderContent2);
    }
}
